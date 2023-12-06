import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB8i26i12H7DjrU0csNuLGxvGbKRMh2k0",
  authDomain: "social-media-866f9.firebaseapp.com",
  projectId: "social-media-866f9",
  storageBucket: "social-media-866f9.appspot.com",
  messagingSenderId: "396338004423",
  appId: "1:396338004423:web:b5264cb9b6e57db6a259e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };