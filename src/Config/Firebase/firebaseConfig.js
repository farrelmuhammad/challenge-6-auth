// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCGQRLXvBynI67_T0kgnt4SY9yMSibUDyU",
    authDomain: "auth-demo-c2cd5.firebaseapp.com",
    projectId: "auth-demo-c2cd5",
    storageBucket: "auth-demo-c2cd5.appspot.com",
    messagingSenderId: "1055837542804",
    appId: "1:1055837542804:web:97eb6620c26bdfe3f25781"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);