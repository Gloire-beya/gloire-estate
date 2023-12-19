// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-5f3bf.firebaseapp.com",
    projectId: "mern-estate-5f3bf",
    storageBucket: "mern-estate-5f3bf.appspot.com",
    messagingSenderId: "74068690400",
    appId: "1:74068690400:web:de8ff4b9edeebb6f989785"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);