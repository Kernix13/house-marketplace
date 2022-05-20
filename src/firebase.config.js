import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC66GdheRgaUyQGTCnlr7zFZNMzTW9jpiw",
  authDomain: "house-marketplace-app-9b65d.firebaseapp.com",
  projectId: "house-marketplace-app-9b65d",
  storageBucket: "house-marketplace-app-9b65d.appspot.com",
  messagingSenderId: "743716043499",
  appId: "1:743716043499:web:76bb6dfe62eef56526dcae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
