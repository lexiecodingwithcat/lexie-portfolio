// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW5ZViA7gFmfSxHGyl5XPE8IXP3JzZCjQ",
  authDomain: "lexie-portfolio-e9767.firebaseapp.com",
  projectId: "lexie-portfolio-e9767",
  storageBucket: "lexie-portfolio-e9767.firebasestorage.app",
  messagingSenderId: "514400150072",
  appId: "1:514400150072:web:6f89bb1101c5bac1913ccd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
