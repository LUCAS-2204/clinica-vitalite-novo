
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWYeVM087npG2KHi8PFOv33A0hQsi5ppk",
  authDomain: "clinica-vitalite.firebaseapp.com",
  projectId: "clinica-vitalite",
  storageBucket: "clinica-vitalite.firebasestorage.app",
  messagingSenderId: "458561544439",
  appId: "1:458561544439:web:6321568b90e3571ee733f2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
