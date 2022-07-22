<script lang="ts" setup>
import {onMounted, onUnmounted, ref, watch} from 'vue';
import FoodCard from '../components/FoodCard.vue';
import BackIcon from '../assets/icons/chevron-left.svg';
import AppHeader from '../components/AppHeader.vue';
import { useFood } from '../store/food';
import {deleteFoodOrdered, deleteRestaurant} from '../services/DataService';
import {collection, onSnapshot, query } from "firebase/firestore";
import {db} from "../firebase";
import { FoodOrdered } from "../types/types";

const foodStore = useFood();

const props = defineProps<{
    id: string;
    restaurant: string;
}>();

const unsubscribe = ref();
onMounted(async () => {
  const q = query(collection(db, `Restaurants/${props.id}/foodOrdered`));
  unsubscribe.value = onSnapshot(q, (querySnapshot) => {
    const updatedFoods: FoodOrdered[] = []
    querySnapshot.forEach((doc) => {
      updatedFoods.push(doc.data() as FoodOrdered);
      foodStore.setFoodOrdered(updatedFoods);
    });
  });
});

const handleDelete = (entry: string, id: string) => {
  deleteFoodOrdered(entry, id);
}

onUnmounted(() => unsubscribe.value());

</script>
<template>
<AppHeader>
    <div class="pr-2">
        <RouterLink :to="{name: 'Home'}">
            <BackIcon class="hover:transition-transform hover:scale-125 hover:ease-in" />
        </RouterLink>
    </div>
    <div class="font-bold text-lg">{{ restaurant }}</div>
</AppHeader>
<div v-if="!foodStore.getFoodIsLoading" class="flex flex-col gap-4 m-auto p-2">
    <FoodCard @delete="handleDelete(restaurant, food.foodId)" v-for="(food, index) in foodStore.foodOrdered" :key="`${index}-${food.name}`" :menu-item="food.name" :rating="food.rating" :comment="food.comment" :date="food.dateCreated" :file-name="food.fileName" />
</div>
</template>
