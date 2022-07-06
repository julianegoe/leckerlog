<script lang="ts" setup>
import {computed, ref as vref} from 'vue';
import AppTextInput from '../components/AppTextInput.vue';
import AppNumberInput from '../components/AppNumberInput.vue';
import { addFoodToData } from '../services/DataService';
import { LeckerLog } from '../types/types';
import { useUser } from '../store/user';
import { storage } from '../firebase/index';
import { ref, uploadBytes} from "firebase/storage";
import { Timestamp } from 'firebase/firestore';
import AppDateInput from '../components/AppDateInput.vue';
import GooglePlacesTextInput from '../components/GooglePlacesTextInput.vue';

const userStore = useUser()

const inputValues = computed<LeckerLog>(() => (
  {
    restaurant: {
      restaurantId: '',
      dateCreated: Timestamp.fromDate(new Date()),
      name: '',
      userId: userStore.userId,
      cuisine: '',
      foodOrdered: [{
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
    const result = event.target?.result;
    arrayBuffer.value = result;
  });
};
const addFood = () => {
  const imageRef = ref(storage, `images/${inputValues.value.restaurant.foodOrdered[0].fileName}`);
  uploadBytes(imageRef, arrayBuffer.value, {
    contentType: 'image/jpeg',
  }).then((snapshot) => {
    console.log('Uploaded a blob or file!', snapshot);
  });
    addFoodToData(inputValues.value);
};

</script>
<template>
    <div class="m-auto p-2">
        <form @submit.prevent="addFood">
            <GooglePlacesTextInput @update:restaurant="(value) => inputValues.restaurant.name = value" label="Restaurant" id="restaurant-input"/>
<!--             <AppTextInput v-model="inputValues.restaurant.name" label="Restaurant" id="restaurant-input"/>
 -->            <AppTextInput v-model="inputValues.restaurant.cuisine" label="Küche" id="cuisine-input"/>
            <AppTextInput v-model="inputValues.restaurant.foodOrdered[0].name" label="Gericht" id="meal-input"/>
            <AppDateInput v-model="inputValues.restaurant.foodOrdered[0].dateCreated" label="Bestellt am" id="date-input" />
            <AppNumberInput v-model="inputValues.restaurant.foodOrdered[0].rating" label="Bewertung" id="rating-input"/>
            <AppTextInput v-model="inputValues.restaurant.foodOrdered[0].comment" label="Kommentar" id="comment-input"/>
            <div class="py-4">
              <label for="file-upload" class="mt-4 p-2 border border-black active:bg-gray-200">Bild auswählen</label>
              <img v-if="imageFile" class="mt-4" :src="imageFile" alt="selected-image" />
              <input class="hidden" role="button" id="file-upload" type="file" @change="handlePhotoChange" accept="image/png, image/jpeg" />
            </div>

            <button class="mt-4 p-2 border border-black active:bg-gray-200" type="submit">Hinzufügen</button>
        </form>
    </div>
</template>
