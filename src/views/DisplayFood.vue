<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { FoodOrdered } from '../types/types';
import FoodCard from '../components/FoodCard.vue';

const props = defineProps<{
    id: string;
    restaurant: string;
}>();

const allFoodDocuments = reactive<FoodOrdered[]>([])

    onMounted(async () => {
    const restaurantsRef = collection(db, `Restaurants/${props.id}/foodOrdered`);
    const q = query(restaurantsRef, where("userId", "==", 'test'));

    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        allFoodDocuments.push(doc.data() as FoodOrdered);
        console.log(allFoodDocuments);
    });
});
</script>
<template>
<header class="flex items-center p-2">
    <div class="pr-2">
        <RouterLink :to="{name: 'Home'}">Zurück</RouterLink>
    </div>
    <div class="font-bold text-lg">{{ restaurant }}</div>
</header>
<div class="flex flex-col gap-4 m-auto p-2">
    <FoodCard v-for="(food, index) in allFoodDocuments" :key="`${index}-${food.name}`" :menu-item="food.name" :rating="food.rating" />
</div>    
</template>