import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwLrq8bXpR7la5EhSEfCSMWxNpJNs1r14",
    authDomain: "leckerlog.firebaseapp.com",
    projectId: "leckerlog",
    storageBucket: "leckerlog.appspot.com",
    messagingSenderId: "218172068678",
    appId: "1:218172068678:web:9c6a1fd7066f0659b88b47",
  };


const firebase = initializeApp(firebaseConfig)

// utils
const auth = getAuth();
const db = getFirestore(firebase);
auth.languageCode = 'de';

// export utils/refs
export {
    auth,
    db,
    firebase,
}