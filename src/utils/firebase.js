
import firebase from "firebase/compat/app"
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAHCS05f3YTmnR85ToRT-Ks-xPZMA6djhI",
    authDomain: "portfolio-19700.firebaseapp.com",
    databaseURL: "https://portfolio-19700.firebaseio.com",
    projectId: "portfolio-19700",
    storageBucket: "portfolio-19700.appspot.com",
    messagingSenderId: "1049457216523",
    appId: "1:1049457216523:web:e595ceefc98c7b68dc8b0e",
    measurementId: "G-RYDJ0VDZ8D",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
