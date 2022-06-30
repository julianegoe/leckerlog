import { db } from '../firebase';
import { collection, getDocs, where, query, addDoc } from "firebase/firestore";
import { LeckerLog } from '../types/types';

export const addFoodToData = async (newEntry: LeckerLog) => {
    // get the restaurant ID
    const q = query(collection(db, "Restaurants"), where("userId", "==", 'test'), where("name", "==", newEntry.restaurant.name));

    const querySnapshot = await getDocs(q);
    let restaurantId;
    querySnapshot.forEach((doc) => {
    restaurantId = doc.id;
    console.log(restaurantId);
    });

    // write to path
    if (restaurantId) {
        const pathToFood = `Restaurants/${restaurantId}/foodOrdered`
        await addDoc(collection(db, pathToFood), newEntry.restaurant.foodOrdered[0]);
     } else {
        const pathToRestaurant = `Restaurants`
        const docRef = await addDoc(collection(db, pathToRestaurant), {
            name: newEntry.restaurant.name,
            cuisine: newEntry.restaurant.cuisine,
            userId: newEntry.restaurant.userId,
        });
        await addDoc(collection(db, `Restaurants/${docRef.id}/foodOrdered`), newEntry.restaurant.foodOrdered[0])
     }
}