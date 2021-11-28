// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSaB70sma7TnT84aPYI9obBwuMkel-aQw",
  authDomain: "burtula-f8e5c.firebaseapp.com",
  projectId: "burtula-f8e5c",
  storageBucket: "burtula-f8e5c.appspot.com",
  messagingSenderId: "437580640683",
  appId: "1:437580640683:web:3d4de17d36bb0cdc22a2ee",
  measurementId: "G-XS1R7XB36K"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 export const db = getFirestore();
 export const getAuths = getAuth()
