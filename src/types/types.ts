import type { Timestamp } from "firebase/firestore";

export interface FoodOrdered {
    name: string;
    rating: number;
    imagePath?: string;
    dateCreated?: any;
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