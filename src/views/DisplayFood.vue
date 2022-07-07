<script lang="ts" setup>
import {computed, onBeforeMount} from 'vue';
import FoodCard from '../components/FoodCard.vue';
import BackIcon from '../assets/icons/chevron-left.svg';
import AppHeader from '../components/AppHeader.vue';
import { useFood } from '../store/food';
import {auth} from "../firebase";

const foodStore = useFood();

const props = defineProps<{
    id: string;
    restaurant: string;
}>();

onBeforeMount(async () => {
    await foodStore.getFoodOrdered(props.id);
});
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
    <FoodCard v-for="(food, index) in foodStore.foodOrdered" :key="`${index}-${food.name}`" :menu-item="food.name" :rating="food.rating" :comment="food.comment" :date="food.dateCreated" :file-name="food.fileName" />
</div>
</template>
