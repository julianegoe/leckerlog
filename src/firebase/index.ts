import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
  };


const firebase = initializeApp(firebaseConfig)

// utils
const auth = getAuth();
/* connectAuthEmulator(auth, 'http://localhost:3000/'); */
const db = getFirestore(firebase);
auth.languageCode = 'de';

// export utils/refs
export {
    auth,
    db,
    firebase,
}