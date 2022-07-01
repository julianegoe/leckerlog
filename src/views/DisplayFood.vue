<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import FoodCard from '../components/FoodCard.vue';
import BackIcon from '../assets/icons/chevron-left.svg';
import { useFood } from '../store/food';

const foodStore = useFood();

const props = defineProps<{
    id: string;
    restaurant: string;
}>();

onBeforeMount(async () => {
    foodStore.getFoodOrdered(props.id);
});
</script>
<template>
<header class="flex items-center p-2">
    <div class="pr-2">
        <RouterLink :to="{name: 'Home'}">
            <BackIcon class="hover:transition-transform hover:scale-125 hover:ease-in" />
        </RouterLink>
    </div>
    <div class="font-bold text-lg">{{ restaurant }}</div>
</header>
<div v-if="!foodStore.getFoodIsLoading" class="flex flex-col gap-4 m-auto p-2">
    <FoodCard v-for="(food, index) in foodStore.foodOrdered" :key="`${index}-${food.name}`" :menu-item="food.name" :rating="food.rating" :comment="food.comment" :date="food.dateCreated" />
</div>    
</template>