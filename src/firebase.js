// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs0UYaGPtNYF8zBovv_2Cf9CCKG1bBSXQ",
  authDomain: "oneios.firebaseapp.com",
  projectId: "oneios",
  storageBucket: "oneios.appspot.com",
  messagingSenderId: "45895614087",
  appId: "1:45895614087:web:f97b3094bc374c122bc222",
  measurementId: "G-X1HBLWYK2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

export default app;