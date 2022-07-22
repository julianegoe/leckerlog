<script lang="ts" setup>
import { onMounted, onUnmounted, ref} from 'vue';
import FoodCard from '../components/FoodCard.vue';
import BackIcon from '../assets/icons/chevron-left.svg';
import AppHeader from '../components/AppHeader.vue';
import { useFood } from '../store/food';
import {deleteFoodOrdered} from '../services/DataService';
import {collection, onSnapshot, query } from "firebase/firestore";
import {db} from "../firebase";
import { FoodOrdered } from "../types/types";
import {useUser} from "../store/user";
import AppModal from "../components/AppModal.vue";

const foodStore = useFood();
const userStore = useUser();

const props = defineProps<{
    id: string;
    restaurant: string;
}>();

const unsubscribe = ref();
onMounted(async () => {
  const q = query(collection(db, `Restaurants/${props.id}/foodOrdered`));
  const updatedFoods: FoodOrdered[] = []
  unsubscribe.value = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      updatedFoods.push(doc.data() as FoodOrdered);
      foodStore.setFoodOrdered(updatedFoods);
    });
  });
});

const showModal = ref(false);
const deleteDocument = ref(false);
const handleDelete = (entry: string, id: string) => {
  showModal.value = true;
  if (deleteDocument.value) {
    deleteFoodOrdered(entry, id)
  }
}

onUnmounted(() => unsubscribe.value());

</script>
<template>
<AppHeader>
    <div class="pr-2">
        <RouterLink :to="{name: 'Home'}">
            <BackIcon class="hover:transition-transform hover:scale-125 hover:ease-in" />
        </RouterLink>
    </div>
    <div class="font-bold text-lg">{{ restaurant }}</div>
</AppHeader>
<div v-if="!foodStore.getFoodIsLoading" class="flex flex-col gap-4 m-auto p-2">
  <Transition name="jump">
    <AppModal v-if="showModal" @delete="deleteDocument = true" @close="showModal = false" text="Willst du dieses Gericht endgültig löschen?" />
  </Transition>
    <FoodCard @delete="handleDelete(restaurant, food.foodId)" v-for="(food, index) in foodStore.foodOrdered" :key="`${index}-${food.name}`" :menu-item="food.name" :rating="food.rating" :comment="food.comment" :date="food.dateCreated" :file-name="food.fileName" />
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
