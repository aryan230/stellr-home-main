// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, OAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbJa4nUlYMsKRCd9xvZymxdaWulBpGvKw",
  authDomain: "stellr-home.firebaseapp.com",
  projectId: "stellr-home",
  storageBucket: "stellr-home.appspot.com",
  messagingSenderId: "552343916081",
  appId: "1:552343916081:web:840746f554e884135a8f10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
