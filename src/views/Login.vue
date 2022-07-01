<script lang="ts" setup>
import { computed, ref } from 'vue';
import { auth } from '../firebase';
import { signInAnonymously, onAuthStateChanged, User, signInWithPopup, linkWithCredential } from "firebase/auth";
import { useUser } from '../store/user';
import GoogleSignInButton from '../components/GoogleSignInButton.vue';
import AppSignInButton from '../components/AppSignInButton.vue';
import { GoogleAuthProvider } from "firebase/auth";


const userStore = useUser()

const currentUser = computed(() => {
    return auth.currentUser;
});
const anonym = ref();

/* const signIn = () => {
    signInAnonymously(auth)
    .then(() => {
        onAuthStateChanged(auth, (user) => {
  if (user) {
    anonym.value = user;
    userStore.$patch({
          isAuthenticated: true,
          userId: user.uid,
        })
    // ...
  } else {
    // User is signed out
    // ...
  }
});
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
} */

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    /* if (currentUser.value) {
        const credential = GoogleAuthProvider.credential(token);
        linkWithCredential(anonym.value, credential)
        .then((usercred) => {
            const user = usercred.user;
            console.log("Anonymous account successfully upgraded", user);
        }).catch((error) => {
            console.log("Error upgrading anonymous account", error);
    });
    } */
    userStore.$patch({
          isAuthenticated: true,
          userId: user.uid,
          displayName: user.displayName || '',
          email: user.email || '',
        })
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
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
    <RouterLink :to="{ name: 'Home'}">
        <GoogleSignInButton @click="signInWithGoogle" />
    </RouterLink>
  </div>
  </div>
</template>