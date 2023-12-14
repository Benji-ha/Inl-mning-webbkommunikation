// Denna är enbart för firebase och dess config

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCs8ovXtcNhFNpp1bAcGH2475Uo_Uf2wBQ",
  authDomain: "movie-database-41242.firebaseapp.com",
  projectId: "movie-database-41242",
  storageBucket: "movie-database-41242.appspot.com",
  messagingSenderId: "1039656585590",
  appId: "1:1039656585590:web:9de133a14beddcaf79d257",
};


const app = initializeApp(firebaseConfig); // Initierar och ansluter mot Firebase
const db = getFirestore(app); // Ansluter och hämtar vår databas

export { db, firebaseConfig }