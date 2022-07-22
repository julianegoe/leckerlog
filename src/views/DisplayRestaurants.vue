<script lang="ts" setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../firebase";
import AppHeader from "../components/AppHeader.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import AppEmptyState from "../components/AppEmptyState.vue";
import { useFood } from "../store/food";
import {useUser} from "../store/user";
import {Restaurant} from "../types/types";
import { deleteRestaurant } from '../services/DataService';

const foodStore = useFood();
const userStore = useUser();

const restaurants = computed<Restaurant[]>(() => {
 return foodStore.restaurants
})

const unsubscribe = ref();
onMounted(async () => {
  const q = query(collection(db, "Restaurants"), where("userId", "==", userStore.userId));
  unsubscribe.value = onSnapshot(q, (querySnapshot) => {
    const updatedRestaurants: Restaurant[] = []
    querySnapshot.forEach((doc) => {
      updatedRestaurants.push({
        ...doc.data() as Restaurant,
        restaurantId: doc.id,
      });
    });
    foodStore.setRestaurants(updatedRestaurants);
  });
});

const handleDelete = (entry: string) => {
  deleteRestaurant(entry)
};

onUnmounted(() => unsubscribe.value());


</script>
<template>
  <AppHeader>
    <div class="text-xl font-bold">LeckerLog</div>
  </AppHeader>
    <div v-if="!foodStore.getRestaurantsIsLoading" class="flex flex-col gap-6 m-auto p-2">
      <RestaurantCard @delete="handleDelete(entry.restaurantId)" v-for="(entry, index) in restaurants" :key="`${index}-entry`" :lecker-log="entry" :doc-id="entry.restaurantId" />
      </div>
    <AppEmptyState v-else-if="restaurants.length === 0 && !foodStore.getRestaurantsIsLoading" />
<!--    Skeleton-->
    <div v-else >
      <div v-for="n in 3" :key="`restaurant-skeleton-${n}`" class="w-full h-32 bg-gray-300 animate-pulse mb-2"></div>
    </div>
</template>
