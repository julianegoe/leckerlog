import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
import { getFirestore, disableNetwork, enableNetwork, enableIndexedDbPersistence } from "firebase/firestore";
import { useNetwork } from '@vueuse/core';
import { getStorage, ref } from "firebase/storage";

const { isOnline } = useNetwork()

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
const storage = getStorage();
/* connectAuthEmulator(auth, 'http://localhost:3000/'); */
const db = getFirestore(firebase);
auth.languageCode = 'de';

/*enableIndexedDbPersistence(db)
  .catch((err) => {
    console.log(err.code);
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });*/



// export utils/refs
export {
    auth,
    db,
    firebase,
    storage,
}
