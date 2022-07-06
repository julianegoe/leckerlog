import { db } from '../firebase';
import { collection, getDocs, where, query, addDoc, Timestamp } from "firebase/firestore";
import { LeckerLog } from '../types/types';
import { useUser } from '../store/user';

const userStore = useUser()

export const addFoodToData = async (newEntry: LeckerLog) => {
    // get the restaurant ID
    const q = query(collection(db, "Restaurants"), where("userId", "==", userStore.userId), where("name", "==", newEntry.restaurant.name));

    const querySnapshot = await getDocs(q);
    let restaurantId;
    querySnapshot.forEach((doc) => {
    restaurantId = doc.id;
    });

    // write to path
    if (restaurantId) {
        const pathToFood = `Restaurants/${restaurantId}/foodOrdered`
        try {
            await addDoc(collection(db, pathToFood), {
                ...newEntry.restaurant.foodOrdered[0],
                dateCreated: newEntry.restaurant.foodOrdered[0].dateCreated,
            });
            window.alert('Gericht hinzugefügt')
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
            await addDoc(collection(db, `Restaurants/${docRef.id}/foodOrdered`), newEntry.restaurant.foodOrdered[0])
            window.alert('Gericht hinzugefügt')
        } catch(error) {
            console.log(error)
        }
     }
}
