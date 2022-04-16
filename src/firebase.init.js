// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsBz2eJQzIuFUE4eLwTD6-JmIh6IN8nVI",
  authDomain: "ema-john-simple-auth-firebase.firebaseapp.com",
  projectId: "ema-john-simple-auth-firebase",
  storageBucket: "ema-john-simple-auth-firebase.appspot.com",
  messagingSenderId: "762906521566",
  appId: "1:762906521566:web:c79c7702c40637d37eb74f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export default auth;
