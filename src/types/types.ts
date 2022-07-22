import type { Timestamp } from "firebase/firestore";

export interface FoodOrdered {
    foodId: string;
    userId: string;
    name: string;
    rating: number;
    fileName?: string;
    dateCreated: string;
    comment: string;
}

export interface Restaurant {
    restaurantId: string;
    dateCreated: Timestamp;
    lastUpdated: Timestamp;
    userId: string;
    name: string;
    foodOrdered: FoodOrdered[];
    cuisine: string;
}

export interface LeckerLog {
    restaurant: Restaurant;
}
