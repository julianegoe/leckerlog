<script lang="ts" setup>
  import {defineEmits} from "vue";
  const emits = defineEmits(['close', 'delete'])
  defineProps<{
    text: string
  }>()
</script>
<template>
    <div class="absolute bottom-24 left-10 z-10 w-3/4 bg-white aspect-auto border border-black p-4">
      <div class="text-sm pb-2">{{ text }}</div>
      <div class="flex justify-between">
        <button class="font-bold" @click="$emit('delete')">Ja</button>
        <button class="font-bold" @click="$emit('close')">Abbrechen</button>
      </div>
    </div>
</template>
