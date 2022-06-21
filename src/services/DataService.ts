import { LeckerLog } from "../types/types";

export const addFoodToData = (food: LeckerLog): LeckerLog[] => {
    const dataString = localStorage.getItem('data') || '[]';
    const allEntries =  JSON.parse(dataString);
    if (allEntries.length === 0) {
        return [food];
    }
    if (allEntries.filter((entry: LeckerLog) => entry.restaurant === food.restaurant).length === 0) {
        return [...allEntries, food];
    };
    return allEntries.map((entry: LeckerLog) => {
        if (entry.restaurant === food.restaurant) {
            return {...entry, meals: [...entry.meals, food.meals[0]]}
        }
        return entry
    });
};