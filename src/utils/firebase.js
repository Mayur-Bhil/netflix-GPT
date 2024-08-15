// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0E7KDO94cl-3VkS2-zJZ07VljrpH6MZE",
  authDomain: "netflixgpt-3a9c7.firebaseapp.com",
  projectId: "netflixgpt-3a9c7",
  storageBucket: "netflixgpt-3a9c7.appspot.com",
  messagingSenderId: "649990944016",
  appId: "1:649990944016:web:282387bffbd874a071e195",
  measurementId: "G-YE2Y58807L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();