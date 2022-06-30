export interface FoodOrdered {
    userId: string;
    name: string;
    rating: number;
    imagePath?: string;
    dateOrdered?: string;
    comment?: string;
}

export interface Restaurant {
    restaurantId: string;
    userId: string;
    name: string;
    dateCreated?: Date;
    foodOrdered: FoodOrdered[];
    cuisine: string;
}

export interface LeckerLog {
    restaurant: Restaurant;
}