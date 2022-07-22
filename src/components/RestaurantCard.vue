<script lang="ts" setup>
import { Restaurant } from '../types/types';
import {computed, ref} from "vue";
import TrashIcon from '../assets/icons/trash.svg';
import AppModal from './AppModal.vue';

const emits = defineEmits(['delete']);
const props = defineProps<{
    leckerLog: Restaurant;
    docId: string;
}>();

const localeDateString = computed(() => {
  if (props.leckerLog.lastUpdated) {
    return props.leckerLog.lastUpdated.toDate().toLocaleDateString();
  }
});

const showModal = ref(false);
const handleDelete = () => {
  emits('delete');
  showModal.value = false;
}

</script>
<template>
  <div class="flex justify-between">
    <Transition name="jump">
      <AppModal v-if="showModal" @delete="handleDelete" @close="showModal = false" text="Willst du dieses Restaurant mit allen Gerichten endgültig löschen?" />
    </Transition>
    <RouterLink :to="{name: 'Food', params: { id: docId, restaurantId: leckerLog.restaurantId, restaurantName: leckerLog.name}}">
      <div>
        <div v-if="leckerLog.lastUpdated" class="text-xs text-gray-500">zuletzt aktualisiert: {{ localeDateString }}</div>
        <h1 class="text-lg font-bold pb-2">{{ leckerLog.name }}</h1>
        <div>{{ leckerLog.cuisine }}</div>
      </div>
    </RouterLink>
    <div class="self-start flex flex-col gap-y-4 cursor-pointer">
      <TrashIcon @click="showModal = true" class="w-8 text-gray-700" />
    </div>
  </div>
</template>
<style scoped>
.jump-enter-active,
.jump-leave-active {
  transition: transform 0.5s ease;
}

.jump-enter-from,
.jump-leave-to {
  transform: translateY(200%);
}

</style>
