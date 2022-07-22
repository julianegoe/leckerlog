<script lang="ts" setup>
import StarIcon from '../assets/icons/star.svg'
import {computed, onMounted, ref as vref} from 'vue';
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import TrashIcon from '../assets/icons/trash.svg';
import AppModal from './AppModal.vue';

const props = defineProps<{
    menuItem: string;
    rating: number;
    fileName?: string;
    comment?: string;
    date?: string;
}>();

const emits = defineEmits(['delete']);

const localeDateString = computed(() => {
    if (props.date) {
        return new Date(props.date).toLocaleDateString();
    }
});

const loadingImage = vref(true);
const imageUrl = vref('');
const getImageUrl = (fileName: string) => {
  const storage = getStorage();
  loadingImage.value = true;
  if (props.fileName) {
    getDownloadURL(ref(storage, `images/${fileName.split('.')[0]}_200x200.${fileName.split('.')[1]}`))
        .then((url) => {
          imageUrl.value = url;
          loadingImage.value = false;
        })
        .catch((error) => {
          console.log(error)
          if (error.code === 'storage/object-not-found') {
            console.log('retry')
          }
          return '#'
        });
  };
};

onMounted(() => {
  if (props.fileName) {
    getImageUrl(props.fileName);
  }
})

const showModal = vref(false);
const handleDelete = () => {
  emits('delete');
  showModal.value = false;
}
</script>
<template>
<div class="flex justify-between items-center rounded-sm gap-4 p-4 border border-black">
    <Transition name="jump">
      <AppModal v-if="showModal" @delete="handleDelete" @close="showModal = false" text="Willst du dieses Gericht endgültig löschen?" />
    </Transition>
    <div>
        <ul>
            <li>
                <div v-if="date" class="text-xs">{{ localeDateString }}</div>
                <div class="font-bold text-lg">{{ menuItem }}</div>
            </li>
          <li>
            <div class="flex pt-2">
              <StarIcon class="w-6" v-for="n in rating" :key="`${n}-star-rating`" />
            </div>
          </li>
          <li>
            <div v-if="comment" class="pt-2">"{{ comment }}"</div>
          </li>
        </ul>
    </div>
    <div v-if="!loadingImage" class="w-1/2">
        <img class="object-fill" :src="imageUrl" :alt="menuItem" />
    </div>
    <div v-else-if="fileName && loadingImage" class="w-1/2">
      <div class="object-fit max-w-[1500px] h-[100px] bg-gray-100 animate-pulse"></div>
    </div>
    <div class="self-start flex flex-col gap-y-4">
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
