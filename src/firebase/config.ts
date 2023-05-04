import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

// export const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);
// export const db = getDatabase(app);

// export const dbRef = db.database().ref();
// export default db;