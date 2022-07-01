import { collection, getDocs, query, where } from 'firebase/firestore';
import { defineStore } from 'pinia'
import { threadId } from 'worker_threads';
import { db } from '../firebase';
import { FoodOrdered, Restaurant } from '../types/types';
import { useUser } from './user';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useFood = defineStore('food', {
    state: () => {
        return {
            restaurants: [] as Restaurant[],
            foodOrdered: [] as FoodOrdered[],
            getFoodIsLoading: true,
            getRestaurantsIsLoading: true,
        }
    },
    actions: {
        async getFoodOrdered(restaurantId: string) {
            this.getFoodIsLoading = true;
            this.foodOrdered = [];
            const restaurantsRef = collection(db, `Restaurants/${restaurantId}/foodOrdered`);
            const q = query(restaurantsRef);

            const querySnapshot = await getDocs(q);
            const updatedFoodOrdered: FoodOrdered[] = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                
                updatedFoodOrdered.push(doc.data() as FoodOrdered);
            });
            this.foodOrdered = updatedFoodOrdered;
            this.getFoodIsLoading = false;
        },
        async getRestaurants() {
            this.getRestaurantsIsLoading = true;
            const userStore = useUser();

            const q = query(collection(db, "Restaurants"), where("userId", "==", userStore.userId));
            const querySnapshot = await getDocs(q);

            const updatedRestaurants: Restaurant[] = []
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                updatedRestaurants.push({
                    ...doc.data() as Restaurant,
                    restaurantId: doc.id,
            });
            this.restaurants = updatedRestaurants;
            this.getRestaurantsIsLoading = false;
        });
        }
    },
});