<script lang="ts" setup>
import { Timestamp } from '@firebase/firestore';
import { ref } from 'vue';

const props = defineProps<{
    label: string;
    id: string;
    modelValue: string;
}>()
const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const updateInput = (value: string) => {
    emit('update:modelValue',value);
}
</script>
<template>
    <label class="relative -bottom-3 left-4 px-1 bg-white text-sm" :for="id">{{ label }}</label>
    <input  @change="updateInput(inputValue)" v-model="inputValue" :id="id" :name="id" class="py-2 px-4 border border-black w-full" type="date" placeholder="dd-mm-yyyy" />
</template>
<style scoped>
    input[type="date"]
{
    display:block;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    min-height: 2.75em;
}
</style>
