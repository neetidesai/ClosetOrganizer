// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSn3s-kDyxewmvVoAm4enNp1kgnbd32oc",
  authDomain: "closetorganizer31.firebaseapp.com",
  projectId: "closetorganizer31",
  storageBucket: "closetorganizer31.appspot.com",
  messagingSenderId: "1047961214850",
  appId: "1:1047961214850:web:bbdcd4a65349e1ea85799b",
  measurementId: "G-RB78HPVDXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore();
const analytics = getAnalytics(app);
const currentUser = undefined;

export { auth, db };