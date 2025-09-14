// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlJb0CDVdzUZDMBDeZJBlOuvRLEml4xQk",
  authDomain: "taskmanager-8d9fa.firebaseapp.com",
  projectId: "taskmanager-8d9fa",
  storageBucket: "taskmanager-8d9fa.firebasestorage.app",
  messagingSenderId: "20856874517",
  appId: "1:20856874517:web:ca0bb9c292ea5e3806901c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };