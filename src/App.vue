<script setup lang="ts">
import AppFooter from "./components/AppFooter.vue";
import { useRoute } from "vue-router";
import AppLayout from "./components/AppLayout.vue";

const route = useRoute();
</script>

<template>
  <main class="h-[calc(100vh-5rem)] overflow-y-scroll">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </main>
  <AppFooter v-if="route.name !== 'Login'" />
</template>
