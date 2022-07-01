<script lang="ts" setup>
    import GoogleSignInButton from '../assets/icons/GoogleSignInButton.svg';
</script>
<template>
<div>
    <button id="google-btn" class="flex items-center pr-2 shadow-md">
        <GoogleSignInButton />
        <div class="text-google opacity-[54%] pl-2 pr-5">Anmeldung mit Google</div>
    </button>
</div>
</template>