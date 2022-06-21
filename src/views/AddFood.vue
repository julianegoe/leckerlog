<script lang="ts" setup>
import { computed, ref } from 'vue';
import AppTextInput from '../components/AppTextInput.vue';
import type { LeckerLog } from '../types/types';
import AppNumberInput from '../components/AppNumberInput.vue';
import { addFoodToData } from '../services/DataService';

const inputValues = computed<LeckerLog>(() => {
    return {
    restaurant: '',
    cuisine: '',
    meals: [{
        name: '',
        rating: 0,
    }],
}
});

const allEntries = ref<LeckerLog[]>([]);

const addFood = () => {
    const updatedData: LeckerLog[] = addFoodToData(inputValues.value);
    console.log(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
};

</script>
<template>
    <div class="m-auto p-2">
        <form @submit.prevent="addFood">
            <AppTextInput v-model="inputValues.restaurant" label="Restaurant" id="restaurant-input"/>
            <AppTextInput v-model="inputValues.cuisine" label="Küche" id="cuisine-input"/>
            <AppTextInput v-model="inputValues.meals[0].name" label="Gericht" id="meal-input"/>
            <AppNumberInput v-model="inputValues.meals[0].rating" label="Bewertung" id="rating-input"/>
            <button class="mt-4 p-2 border border-black" type="submit">Hinzufügen</button>
        </form>
    </div>
</template>