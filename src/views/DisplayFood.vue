<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import { exampleData, LeckerLog } from '../types/types';

const data = ref<LeckerLog[]>([]);
onBeforeMount(() => {
   const dataString = localStorage.getItem('data') || '[]';
   data.value = JSON.parse(dataString);
})
</script>
<template>
    <div v-if="exampleData.length > 0" class="flex flex-col gap-4 m-auto p-2">
        <RestaurantCard v-for="(entry, index) in data" :key="`${index}-entry`" :lecker-log="entry" />
    </div>
</template>