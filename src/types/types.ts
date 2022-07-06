import type { Timestamp } from "firebase/firestore";

export interface FoodOrdered {
    name: string;
    rating: number;
    fileName?: string;
    dateCreated?: string;
    comment: string;
}

export interface Restaurant {
    restaurantId: string;
    dateCreated: any;
    userId: string;
    name: string;
    foodOrdered: FoodOrdered[];
    cuisine: string;
}

export interface LeckerLog {
    restaurant: Restaurant;
}
