<script lang="ts" setup>
import {computed, onMounted, ref} from 'vue';
import { auth } from '../firebase';
import { setPersistence, browserLocalPersistence, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useUser } from '../store/user';
import GoogleSignInButton from '../components/GoogleSignInButton.vue';
import { useRouter } from 'vue-router';


const userStore = useUser();
const router = useRouter();

const currentUser = computed(() => {
    return auth.currentUser;
});

const signInWithGoogle = () => {
  setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
}

onMounted(() => {
  auth.onAuthStateChanged(function(user) {
    if (user) {
      userStore.$patch({
        isAuthenticated: true,
        userId: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
      });
      router.push({name: 'Home'});
    }
  });
})
</script>
<template>
<h1 class="text-2xl font-bold text-center mb-4">Leckerlog!</h1>
  <div class="flex flex-col items-center gap-4">
    <!-- <div>
    <RouterLink :to="{ name: 'Home' }">
        <AppSignInButton @click="signIn" />
    </RouterLink>
  </div> -->
  <div>
      <GoogleSignInButton @click="signInWithGoogle" />
  </div>
  </div>
</template>
