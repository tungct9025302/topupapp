import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAfo-GdAdWlKLQ1M9jkVAsoTNksWRgp1Y4",
  authDomain: "razer-database.firebaseapp.com",
  projectId: "razer-database",
  storageBucket: "razer-database.appspot.com",
  messagingSenderId: "635480763168",
  appId: "1:635480763168:web:5613df5e74e11bfe5c0545",
  measurementId: "G-T2BCYQYEWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
