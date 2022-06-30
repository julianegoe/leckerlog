<script lang="ts" setup>
import StarIcon from '../assets/icons/star.svg'
import { computed } from 'vue';

const props = defineProps<{
    menuItem: string;
    imageUrl?: string;
    rating: number;
    comment?: string;
    date?: string;
}>()

const localeDateString = computed(() => {
    return new Date('2022-05-12').toLocaleDateString();
});
</script>
<template>
<div class="flex justify-between items-center rounded-sm gap-4 p-4 border border-black">
    <div>
        <ul>
            <li>
                <div class="font-bold">{{ menuItem }}</div>
                <div v-if="date">{{ localeDateString }}</div>
            </li>
        </ul>
        <div class="flex pt-2">
          <StarIcon class="w-6" v-for="n in rating" :key="`${n}-star-rating`" />
        </div>
        <div class="pt-2">{{ comment }}</div>
    </div>
    <div class="w-1/2">
        <img class="object-fit" src="https://via.placeholder.com/150x150" :alt="menuItem" />
    </div>
</div>
</template>