<script lang="ts" setup>
import StarIcon from '../assets/icons/star.svg'
import {computed, onMounted, ref as vref} from 'vue';
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {Timestamp} from "@firebase/firestore";

const props = defineProps<{
    menuItem: string;
    rating: number;
    fileName?: string;
    comment?: string;
    date?: string;
}>()

const localeDateString = computed(() => {
    if (props.date) {
        return new Date(props.date).toLocaleDateString();
    }
});

const imageUrl = vref('');
const getImageUrl = (fileName: string) => {
  const storage = getStorage();
  if (props.fileName) {
    getDownloadURL(ref(storage, `images/${fileName.split('.')[0]}_200x200.jpeg`))
        .then((url) => {
          imageUrl.value = url;
        })
        .catch((error) => {
          console.log(error)
          return '#'
        });
  };
};

onMounted(() => {
  if (props.fileName) {
    getImageUrl(props.fileName);
  }
})
</script>
<template>
<div class="flex justify-between items-center rounded-sm gap-4 p-4 border border-black">
    <div>
        <ul>
            <li>
                <div v-if="date" class="text-xs">{{ localeDateString }}</div>
                <div class="font-bold text-lg">{{ menuItem }}</div>
            </li>
        </ul>
        <div class="flex pt-2">
          <StarIcon class="w-6" v-for="n in rating" :key="`${n}-star-rating`" />
        </div>
        <div v-if="comment" class="pt-2">"{{ comment }}"</div>
    </div>
    <div v-if="fileName" class="w-1/2">
        <img class="object-fill" :src="imageUrl" :alt="menuItem" />
    </div>
</div>
</template>
