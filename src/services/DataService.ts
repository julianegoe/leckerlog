import { db } from '../firebase';
import { collection, getDocs, deleteDoc, where, query, addDoc, updateDoc, doc } from "firebase/firestore";
import { LeckerLog } from '../types/types';
import { useUser } from '../store/user';
import {Timestamp} from "@firebase/firestore";

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

export const addFoodToData = async (newEntry: LeckerLog) => {
    const restaurantId = await getRestaurantDocId(newEntry.restaurant.name);
    // write to path
    if (restaurantId) {
        const pathToFood = `Restaurants/${restaurantId}/foodOrdered`
        try {
            await addDoc(collection(db, pathToFood), {
                ...newEntry.restaurant.foodOrdered[0],
                dateCreated: newEntry.restaurant.foodOrdered[0].dateCreated,
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
            })
        } catch(error) {
            console.log(error)
        }
     }
}

export const deleteFoodOrdered = async (restaurantId: string, foodId: string) => {
    const path = `Restaurants/${restaurantId}/foodOrdered/${foodId}`;
    console.log(path)
    const docRef = doc(db, path)
    deleteDoc(docRef)
        .then(() => {
            console.log('deleted')
            /*const updatedFood = foodStore.foodOrdered.filter((food: FoodOrdered) => {
                return food.foodId !== foodId;
            })
            foodStore.setFoodOrdered(updatedFood);*/
        })
        .catch(() => {
            console.log('error')
        });
}

export const deleteRestaurant = async (restaurantId: string) => {
    const path = `Restaurants/${restaurantId}`;
    const docRef = doc(db, path)
    deleteDoc(docRef)
        .then(() => {
            console.log('deleted');
        })
        .catch(() => {
            console.log('error')
        });
}
