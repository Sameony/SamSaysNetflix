// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoO8A6ycLM2n0i3jiOMksVhNGHgv4tm60",
  authDomain: "sam-says-netflix.firebaseapp.com",
  projectId: "sam-says-netflix",
  storageBucket: "sam-says-netflix.appspot.com",
  messagingSenderId: "786441650762",
  appId: "1:786441650762:web:9f2c145e177dd56e819cb3",
  measurementId: "G-RCZFW32G8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);