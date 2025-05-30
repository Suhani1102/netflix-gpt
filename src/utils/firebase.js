// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-81175.firebaseapp.com",
  projectId: "netflixgpt-81175",
  storageBucket: "netflixgpt-81175.firebasestorage.app",
  messagingSenderId: "218866034259",
  appId: "1:218866034259:web:a2227e1ce902ad3da308a6",
  measurementId: "G-NJKPENJY0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
