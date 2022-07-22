import { db } from '../firebase';
import { collection, getDocs, deleteDoc, where, query, addDoc, updateDoc, doc } from "firebase/firestore";
import {FoodOrdered, LeckerLog, Restaurant} from '../types/types';
import { useUser } from '../store/user';
import {Timestamp} from "@firebase/firestore";
import { v4 } from 'uuid';
import {useFood} from "../store/food";

const getRestaurantDocId = async (restaurantName: string) => {
    const userStore = useUser();
    // get the restaurant ID
    const q = query(collection(db, "Restaurants"), where("userId", "==", userStore.userId), where("name", "==", restaurantName));

    const querySnapshot = await getDocs(q);
    let restaurantId;
    await querySnapshot.forEach((doc) => {
        restaurantId = doc.id;
    });
    return restaurantId;
};

const getFoodDocId = async (restaurantName:string, foodId: string) => {
    const restaurantId = await getRestaurantDocId(restaurantName);
    // get the food doc ID
    const q = query(collection(db, `Restaurants/${restaurantId}/foodOrdered`), where("foodId", "==", foodId));
    const querySnapshot = await getDocs(q);
    let foodDocId;
    await querySnapshot.forEach((doc) => {
        console.log('id: ', doc.id)
        foodDocId = doc.id;
    });
    return foodDocId;
}

export const addFoodToData = async (newEntry: LeckerLog) => {
    const restaurantId = await getRestaurantDocId(newEntry.restaurant.name);
    // write to path
    if (restaurantId) {
        const pathToFood = `Restaurants/${restaurantId}/foodOrdered`
        try {
            await addDoc(collection(db, pathToFood), {
                ...newEntry.restaurant.foodOrdered[0],
                dateCreated: newEntry.restaurant.foodOrdered[0].dateCreated,
                foodId: v4(),
            });
            await updateDoc(doc(db, `Restaurants/${restaurantId}`), {
                lastUpdated: Timestamp.fromDate(new Date()),
            });
        } catch(error) {
            console.log(error)
        }
     } else {
        const pathToRestaurant = `Restaurants`
        const docRef = await addDoc(collection(db, pathToRestaurant), {
            name: newEntry.restaurant.name,
            cuisine: newEntry.restaurant.cuisine,
            userId: newEntry.restaurant.userId,
            dateCreated: newEntry.restaurant.dateCreated,
        });
        try {
            await addDoc(collection(db, `Restaurants/${docRef.id}/foodOrdered`), {
                ...newEntry.restaurant.foodOrdered[0],
                dateCreated: newEntry.restaurant.foodOrdered[0].dateCreated,
                foodId: v4(),
            })
        } catch(error) {
            console.log(error)
        }
     }
}

export const deleteFoodOrdered = async (restaurantName: string, foodId: string) => {
    const restaurantDocId = await getRestaurantDocId(restaurantName);
    const foodDocId = await getFoodDocId(restaurantName, foodId);
    const path = `Restaurants/${restaurantDocId}/foodOrdered/${foodDocId}`;
    console.log(path)
    const docRef = doc(db, path)
    deleteDoc(docRef)
        .then(() => {
            console.log('deleted')
        })
        .catch(() => {
            console.log('error')
        });
}

export const deleteRestaurant = async (restaurantName: string) => {
    const restaurantDocId = await getRestaurantDocId(restaurantName);
    const path = `Restaurants/${restaurantDocId}`;
    const docRef = doc(db, path)
    deleteDoc(docRef)
        .then(() => {
            console.log('deleted');
        })
        .catch(() => {
            console.log('error')
        });
}
