// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM1uRHNVFmCxGdL9MSgfz8woQlJ8i6pX8",
  authDomain: "final-test-9c64e.firebaseapp.com",
  projectId: "final-test-9c64e",
  storageBucket: "final-test-9c64e.appspot.com",
  messagingSenderId: "816539653143",
  appId: "1:816539653143:web:7e383300f6c91b60453852",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
