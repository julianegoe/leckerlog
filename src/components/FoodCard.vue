<script lang="ts" setup>
import StarIcon from '../assets/icons/star.svg'
defineProps<{
    menuItem: string;
    imageUrl: string;
    rating: number;
}>()
</script>
<template>
<div class="flex justify-between items-center rounded-sm gap-4 p-4 border border-black">
    <div>
        <ul>
            <li>
                {{ menuItem }}
            </li>
        </ul>
        <div class="flex">
          <StarIcon class="w-6" v-for="n in rating" :key="`${n}-star-rating`" />
        </div>
    </div>
    <div class="w-1/2">
        <img class="object-fit" :src="imageUrl" :alt="menuItem" />
    </div>
</div>
</template>