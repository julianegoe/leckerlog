<script lang="ts" setup></script>
<template>
<footer class="w-full h-20 bg-gray-200 flex justify-around items-center">
    <router-link :to="{name: 'AddFood'}">
        <button class="p-2 cursor-pointer">Hinzufügen</button>
    </router-link>
    <router-link :to="{name: 'Home'}">
        <button class="p-2 cursor-pointer">Liste</button>
    </router-link>
</footer>
</template>