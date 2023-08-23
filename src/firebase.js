
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs4xP9YR82GTZE0TzFHpWfWFLa979DL6U",
  authDomain: "react-portfolio-dashboard-huy.firebaseapp.com",
  projectId: "react-portfolio-dashboard-huy",
  storageBucket: "react-portfolio-dashboard-huy.appspot.com",
  messagingSenderId: "744817538215",
  appId: "1:744817538215:web:97ed28d11c8d90e4ca5782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider()


export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
}