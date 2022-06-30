<script lang="ts" setup>
import { computed, } from 'vue';
import AppTextInput from '../components/AppTextInput.vue';
import type { LeckerLog } from '../types/types';
import AppNumberInput from '../components/AppNumberInput.vue';
import AppDateInput from '../components/AppDateInput.vue';
import { addFoodToData } from '../services/DataService';

const inputValues = computed<LeckerLog>(() => (
  {
    userId: 'test',
    restaurant: {
      name: '',
      foodOrdered: [{
        name: '',
        rating: 0,
        comment: '',
      }],
      cuisine: '',
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
            <AppTextInput v-model="inputValues.restaurant.name" label="Restaurant" id="restaurant-input"/>
            <AppTextInput v-model="inputValues.restaurant.cuisine" label="Küche" id="cuisine-input"/>
            <AppTextInput v-model="inputValues.restaurant.foodOrdered[0].name" label="Gericht" id="meal-input"/>
            <AppNumberInput v-model="inputValues.restaurant.foodOrdered[0].rating" label="Bewertung" id="rating-input"/>
            <button class="mt-4 p-2 border border-black" type="submit">Hinzufügen</button>
        </form>
    </div>
</template>