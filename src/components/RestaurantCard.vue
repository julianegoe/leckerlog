<script lang="ts" setup>
import { Restaurant } from '../types/types';
import {computed} from "vue";
import TrashIcon from '../assets/icons/trash.svg';


const props = defineProps<{
    leckerLog: Restaurant;
    docId: string;
}>();

const localeDateString = computed(() => {
  if (props.leckerLog.lastUpdated) {
    return props.leckerLog.lastUpdated.toDate().toLocaleDateString();
  }
});

</script>
<template>
  <div class="flex justify-between">
    <RouterLink :to="{name: 'Food', params: { id: docId, restaurant: leckerLog.name}}">
      <div>
        <div v-if="leckerLog.lastUpdated" class="text-xs text-gray-500">zuletzt aktualisiert: {{ localeDateString }}</div>
        <h1 class="text-lg font-bold pb-2">{{ leckerLog.name }}</h1>
        <div>{{ leckerLog.cuisine }}</div>
      </div>
    </RouterLink>
    <div class="self-start flex flex-col gap-y-4 cursor-pointer">
      <TrashIcon @click="$emit('delete')" class="w-8 text-gray-700" />
    </div>
  </div>
</template>
