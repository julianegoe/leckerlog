<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { ref } from 'vue';
import { AutocompletePrediction } from '../types/types';

const restaurantRef = ref();
const restaurant = ref('');
const googlePredictions = ref<any>([]);

onMounted(async () => {
    const service = new google.maps.places.AutocompleteService();
    watch(restaurant, () => {
        service.getPlacePredictions({
            input: restaurant.value,
            componentRestrictions: { country: 'de' },
            types: ['restaurant', 'cafe', 'night_club', 'bakery'],
        }, (predictions: any, status: string) => {
            if (status === 'OK') {
                googlePredictions.value = predictions;
            }
        })
        if (restaurant.value === '') {
            googlePredictions.value = [];
        }
    })
})

const props = defineProps<{
    label: string;
    id: string;
}>()

const emit = defineEmits(['update:restaurant']);

const handleSelection = (value: string) => {
    emit('update:restaurant', value)
    googlePredictions.value = [];
    restaurant.value = value;
}


</script>
<template>
    <div>
        <label class="relative -bottom-3 left-4 px-1 bg-white text-sm" :for="id">{{ label }}</label>
        <input id="autocomplete" type="text" :ref="restaurantRef" v-model="restaurant" :id="id"
            @input="(value) => $emit('update:restaurant', value)" class="py-2 px-4 border border-black w-full" />
        <div v-if="googlePredictions.length > 0" class="border border-black">
            <div class="cursor-pointer hover:bg-gray-200 p-2" @click="handleSelection(prediction.structured_formatting.main_text)" v-for="(prediction, index) in googlePredictions" :key="prediction.place_id">
                <div>{{ prediction.structured_formatting.main_text }}</div>
                <div class="text-xs text-gray-400">{{ prediction.structured_formatting.secondary_text }}</div>
            </div>
        </div>
    </div>
</template>