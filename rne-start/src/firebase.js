// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

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
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
