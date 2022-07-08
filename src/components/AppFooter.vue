<script lang="ts" setup>
import {useFood} from "../store/food";

const foodStore = useFood();

</script>
<template>
<footer class="w-full h-20 bg-gray-200 flex justify-around items-center">
    <router-link :to="{name: 'AddFood'}">
        <button :disabled="foodStore.isUploading" class="p-2 cursor-pointer"
                :class="{
                  'disabled:text-gray-500 disabled:cursor-default' : foodStore.isUploading,
                }">Hinzufügen</button>
    </router-link>
    <router-link :to="{name: 'Home'}">
        <button :disabled="foodStore.isUploading" class="p-2 cursor-pointer"
        :class="{
          'disabled:text-gray-500 disabled:cursor-default' : foodStore.isUploading,
        }">Liste</button>
    </router-link>
</footer>
</template>
