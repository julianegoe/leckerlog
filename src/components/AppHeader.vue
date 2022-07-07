<script lang="ts" setup>
  import {computed} from "vue";
  import {auth} from "../firebase";

  const currentUser = computed(() => {
    return auth.currentUser;
  });
</script>
<template>
  <header class="flex justify-between items-center p-2">
    <slot></slot>
<!--    right side-->
    <div>
      <img class="w-10 rounded-full" :src="currentUser.photoURL || '#'" alt="profile-image">
    </div>
  </header>
</template>
