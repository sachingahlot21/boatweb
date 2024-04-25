// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTEmBpb6jq4HjflHbmc-2TaSgsvTJ6sKo",
  authDomain: "otpboat2.firebaseapp.com",
  projectId: "otpboat2",
  storageBucket: "otpboat2.appspot.com",
  messagingSenderId: "801444349423",
  appId: "1:801444349423:web:0e86b3fc7120662367a21a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);