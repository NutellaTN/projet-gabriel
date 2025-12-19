// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbBOWSmE1RhfGsdzij2FNQBMuTOs3vrdg",
    authDomain: "ril-gp.firebaseapp.com",
    databaseURL: "https://ril-gp-default-rtdb.firebaseio.com",
    projectId: "ril-gp",
    storageBucket: "ril-gp.firebasestorage.app",
    messagingSenderId: "105298276512",
    appId: "1:105298276512:web:18c9b60e5380a5cc0cd9c5",
    measurementId: "G-E03RXTETYY"
};

// Initialize Firebase (Modular)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
