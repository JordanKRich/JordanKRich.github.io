// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBasHV_1P-S0hArcbfFX0sdxIyD_KJe4og",
  authDomain: "personalproject-bcd09.firebaseapp.com",
  projectId: "personalproject-bcd09",
  storageBucket: "personalproject-bcd09.firebasestorage.app",
  messagingSenderId: "114450428512",
  appId: "1:114450428512:web:640d7fefd98b4fbfbb8905",
  measurementId: "G-98L43MXS2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};