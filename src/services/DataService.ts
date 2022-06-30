import { LeckerLog } from "../types/types";
import { db } from '../firebase';
import { collection, getDocs, doc, where, query, arrayUnion, updateDoc } from "firebase/firestore";

export const addFoodToData = async (newEntry: LeckerLog) => {
    const ref = doc(db, "entries", "jyPSjBcTbRvlmT2kzefQ");
    await updateDoc(ref, {
        "restaurant.foodOrdered": arrayUnion(newEntry.restaurant.foodOrdered[0])
    });
}