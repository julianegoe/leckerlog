<script setup lang="ts">
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <main class="h-[calc(100vh-5rem)] overflow-y-scroll">
     <router-view/>
  </main>
  <AppFooter />
</template>
