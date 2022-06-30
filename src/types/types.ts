export interface FoodOrdered {
    name: string;
    rating: number;
    imagePath?: string;
    dateOrdered?: string;
    comment: string;
}

export interface Restaurant {
    name: string;
    dateCreated?: Date;
    foodOrdered: FoodOrdered[];
    cuisine: string;
}

export interface LeckerLog {
    userId: string;
    restaurant: Restaurant;
}