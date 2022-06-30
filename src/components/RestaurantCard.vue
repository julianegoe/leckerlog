<script lang="ts" setup>
import FoodCard from './FoodCard.vue';
import { LeckerLog } from '../types/types';

const props = defineProps<{
    leckerLog: LeckerLog;
}>();

</script>
<template>
    <div>
        <h1 class="text-lg font-bold pb-2">{{ leckerLog.restaurant.name }}</h1>
        <FoodCard v-for="(meal, index) in leckerLog.restaurant.foodOrdered" :key="`${index}-meal`" :menu-item="meal.name" image-url="https://via.placeholder.com/500x250.png?text=Pizza+Salami" :rating="meal.rating" :comment="meal.comment" />
    </div>
</template>