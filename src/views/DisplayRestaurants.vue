<script lang="ts" setup>
import { onMounted, ref } from "vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import AppEmptyState from "../components/AppEmptyState.vue";
import { useFood } from "../store/food";
import AppHeader from "../components/AppHeader.vue";

const foodStore = useFood();

onMounted(async () => {
    foodStore.getRestaurants();
});

</script>
<template>
  <AppHeader>
    <div class="text-xl font-bold">LeckerLog</div>
  </AppHeader>
    <div v-if="!foodStore.getRestaurantsIsLoading" class="flex flex-col gap-4 m-auto p-2">
        <RestaurantCard v-for="(entry, index) in foodStore.restaurants" :key="`${index}-entry`" :lecker-log="entry" :doc-id="entry.restaurantId" />
    </div>
    <AppEmptyState v-else />
</template>
