<script lang="ts" setup>
import { onMounted, ref } from "vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useUser } from "../store/user";
import AppEmptyState from "../components/AppEmptyState.vue";
import { useFood } from "../store/food";

const foodStore = useFood();

onMounted(async () => {
    foodStore.getRestaurants();
});

</script>
<template>
    <div v-if="!foodStore.getRestaurantsIsLoading" class="flex flex-col gap-4 m-auto p-2">
        <RestaurantCard v-for="(entry, index) in foodStore.restaurants" :key="`${index}-entry`" :lecker-log="entry" :doc-id="entry.restaurantId" />
    </div>
    <AppEmptyState v-else />
</template>
