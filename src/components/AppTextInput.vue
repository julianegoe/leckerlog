<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    label: string;
    id: string;
    modelValue: string;
}>()
const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);
const updateInput = (value: string) => {
    emit('update:modelValue', value);
}
</script>
<template>
    <label class="relative -bottom-3 left-4 px-1 bg-white text-sm" :for="id">{{ label }}</label>
    <input  @change="updateInput(inputValue)" v-model="inputValue" :id="id" :ame="id" class="py-2 px-4 border border-black w-full" type="text" />
</template>