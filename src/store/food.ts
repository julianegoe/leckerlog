import { defineStore } from 'pinia'
import {FoodOrdered, LeckerLog, Restaurant} from '../types/types';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useFood = defineStore('food', {
    state: () => {
        return {
            restaurants: [] as Restaurant[],
            foodOrdered: [] as FoodOrdered[],
            getFoodIsLoading: true,
            getRestaurantsIsLoading: true,
            isUploading: false,
        }
    },
    actions: {
        setFoodOrdered(payload: FoodOrdered[]) {
            this.foodOrdered = payload;
            this.getFoodIsLoading = false;
        },
        setRestaurants(payload: Restaurant[]) {
            this.restaurants = payload;
            this.getRestaurantsIsLoading = false;
        },
    },
});
