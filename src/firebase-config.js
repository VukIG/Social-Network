// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_5u7aaXzAreZ4454UUlqJuej13i4Erz4",
  authDomain: "koje-busenje.firebaseapp.com",
  projectId: "koje-busenje",
  storageBucket: "koje-busenje.appspot.com",
  messagingSenderId: "248297689275",
  appId: "1:248297689275:web:bbe49fcde40265fb09199e",
  measurementId: "G-73X8J81PRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
