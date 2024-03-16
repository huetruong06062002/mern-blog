// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ae376.firebaseapp.com",
  projectId: "mern-blog-ae376",
  storageBucket: "mern-blog-ae376.appspot.com",
  messagingSenderId: "431783750047",
  appId: "1:431783750047:web:d1e0c5eed93a65287d75aa",
  measurementId: "G-85D2BCWXPN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
