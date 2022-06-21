<script lang="ts" setup>
import FoodCard from './FoodCard.vue';
import { LeckerLog } from '../types/types';

defineProps<{
    leckerLog: LeckerLog;
}>()
</script>
<template>
    <div>
        <h1>{{ leckerLog.restaurant }}</h1>
        <FoodCard v-for="(meal, index) in leckerLog.meals" :key="`${index}-meal`" :menu-item="meal.name" image-url="https://via.placeholder.com/500x250.png?text=Pizza+Salami" :rating="meal.rating" />
    </div>
</template>