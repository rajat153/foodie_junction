// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCaKVj7GVwOCsfN91Um6dDcOItt2Nefdxg",
  authDomain: "foodiejunction-ba5e5.firebaseapp.com",
  projectId: "foodiejunction-ba5e5",
  storageBucket: "foodiejunction-ba5e5.firebasestorage.app",
  messagingSenderId: "174265848723",
  appId: "1:174265848723:web:60823f1b7037e84bf18e66",
  measurementId: "G-08Q1FQ2ZSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);