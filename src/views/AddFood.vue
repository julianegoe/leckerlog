<script lang="ts" setup>
import {computed, ref as vref} from 'vue';
import AppTextInput from '../components/AppTextInput.vue';
import { addFoodToData } from '../services/DataService';
import { LeckerLog } from '../types/types';
import { useUser } from '../store/user';
import { storage } from '../firebase';
import { ref, uploadBytes} from "firebase/storage";
import { Timestamp } from 'firebase/firestore';
import AppDateInput from '../components/AppDateInput.vue';
import GooglePlacesTextInput from '../components/GooglePlacesTextInput.vue';
import AppHeader from "../components/AppHeader.vue";
import AppStarRatingInput from "../components/AppStarRatingInput.vue";
import {useFood} from "../store/food";

const userStore = useUser();
const foodStore = useFood();


const inputValues = computed<LeckerLog>(() => (
  {
    restaurant: {
      restaurantId: '',
      dateCreated: Timestamp.fromDate(new Date()),
      lastUpdated: Timestamp.fromDate(new Date()),
      name: '',
      userId: userStore.userId,
      cuisine: '',
      foodOrdered: [{
        foodId: '',
        userId: userStore.userId,
        dateCreated: '',
        name: '',
        rating: 0,
        comment: '',
        fileName: '',
      }],
    },
  }
));

const arrayBuffer = vref();
const imageFile = vref();
const handlePhotoChange = (e: any) => {
  const fileList = e.target?.files;
  inputValues.value.restaurant.foodOrdered[0].fileName = fileList[0].name;
  imageFile.value = URL.createObjectURL(fileList[0]);
  // Check if the file is an image.
  if (fileList[0].type && !fileList[0].type.startsWith('image/')) {
    console.log('File is not an image.', fileList[0].type, fileList[0]);
    return;
  }
  const reader = new FileReader();
  reader.readAsArrayBuffer(fileList[0])
  reader.addEventListener('load', (event) => {
    arrayBuffer.value = event.target?.result;
  });
};

const addFood = () => {
  foodStore.isUploading = true;
  const imageRef = ref(storage, `images/${inputValues.value.restaurant.foodOrdered[0].fileName}`);
  uploadBytes(imageRef, arrayBuffer.value, {
    contentType: 'image/jpeg',
  }).then((snapshot) => {
    addFoodToData(inputValues.value);
    foodStore.isUploading = false;
    window.alert('Gericht hinzugefügt')
  });
};

</script>
<template>
  <AppHeader>
    <div class="text-xl font-bold">LeckerLog</div>
  </AppHeader>
    <div class="m-auto p-2">
        <form @submit.prevent="addFood">
            <GooglePlacesTextInput @update:restaurant="(value) => inputValues.restaurant.name = value" label="Restaurant" id="restaurant-input"/>
<!--             <AppTextInput v-model="inputValues.restaurant.name" label="Restaurant" id="restaurant-input"/>
 -->            <AppTextInput v-model="inputValues.restaurant.cuisine" label="Küche" id="cuisine-input"/>
            <AppTextInput v-model="inputValues.restaurant.foodOrdered[0].name" label="Gericht" id="meal-input"/>
            <AppDateInput v-model="inputValues.restaurant.foodOrdered[0].dateCreated" label="Bestellt am" id="date-input" />
            <AppTextInput v-model="inputValues.restaurant.foodOrdered[0].comment" label="Kommentar" id="comment-input"/>
            <AppStarRatingInput @change:stars="(value) => inputValues.restaurant.foodOrdered[0].rating = value" />
            <div class="py-4">
              <label for="file-upload" class="mt-4 p-2 border border-black active:bg-gray-200">Bild auswählen</label>
              <img v-if="imageFile" class="mt-4" :src="imageFile" alt="selected-image" />
              <input class="hidden" role="button" id="file-upload" type="file" @change="handlePhotoChange" accept="image/png, image/jpeg" />
            </div>

            <button class="mt-4 p-2 border border-black active:bg-gray-200" type="submit">Hinzufügen</button>
        </form>
    </div>
</template>
