<script lang="ts" setup>
import { computed, onMounted, } from 'vue';
import AppTextInput from '../components/AppTextInput.vue';
import AppNumberInput from '../components/AppNumberInput.vue';
import { addFoodToData } from '../services/DataService';
import { LeckerLog } from '../types/types';
import { useUser } from '../store/user';
import { db, firebase } from '../firebase/index';
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
        dateCreated: null,
        name: '',
        rating: 0,
        comment: '',
      }],
    }, 
  }
));

const addFood = () => {
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
            <button class="mt-4 p-2 border border-black" type="submit">Hinzufügen</button>
        </form>
        <input type="file" />
    </div>
</template>