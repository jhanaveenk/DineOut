// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAppXhpGR4GOCi1ALjN8bAY_wE6QaGepTM",
  authDomain: "dineout-99c46.firebaseapp.com",
  projectId: "dineout-99c46",
  storageBucket: "dineout-99c46.appspot.com",
  messagingSenderId: "215458997673",
  appId: "1:215458997673:web:73a8fbde8d07124d5450b8",
  measurementId: "G-0T4TKK6YN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
