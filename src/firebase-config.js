// src/firebase-config.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Replace with your actual Firebase project configuration
// You can find these in the Firebase Console under Project Settings
const firebaseConfig = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_PROJECT.firebaseapp.com",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_PROJECT.appspot.com",
    // messagingSenderId: "YOUR_SENDER_ID",
    // appId: "YOUR_APP_ID",

    // Provided URL
    databaseURL: "https://ril-gp-default-rtdb.firebaseio.com/"
};

// Initialize only if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const db = firebase.database();

export { db };
