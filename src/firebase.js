import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDaP4odjM7cLmQ5Tp_auPo4xSLPOgFn-No",
    authDomain: "topic-42a89.firebaseapp.com",
    projectId: "topic-42a89",
    storageBucket: "topic-42a89.firebasestorage.app",
    messagingSenderId: "343341031534",
    appId: "1:343341031534:web:c685d7ff15b1c77005467f",
    measurementId: "G-T3FXEM5N81"
};

try {
    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    export const auth = getAuth(app);
    console.log("Firebase initialized successfully");
} catch (error) {
    console.error("Firebase initialization error:", error);
    throw error;
}