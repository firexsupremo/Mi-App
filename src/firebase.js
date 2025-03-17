// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Si usas Firestore


    const firebaseConfig = {
        apiKey: "AIzaSyCjy293p1SMn9K9DQIX4rSBQKiFILNaD1Y",
        authDomain: "clase-1-1c7bc.firebaseapp.com",
        projectId: "clase-1-1c7bc",
        storageBucket: "clase-1-1c7bc.firebasestorage.app",
        messagingSenderId: "116764457295",
        appId: "1:116764457295:web:fb73f183458fbb70ebed3a"
      };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore (si lo estás usando)
const db = getFirestore(app);

export { db }; // Exporta Firestore (o cualquier otro servicio que uses)