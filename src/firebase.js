// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg90TKaRrsI0jcWPRuBY_hxTZL2M57qVA",
  authDomain: "blackroom-c72ee.firebaseapp.com",
  projectId: "blackroom-c72ee",
  storageBucket: "blackroom-c72ee.appspot.com",
  messagingSenderId: "926638773174",
  appId: "1:926638773174:web:5cd639c7059bf13c39a717",
  measurementId: "G-1QCLH52N04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
