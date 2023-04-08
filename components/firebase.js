// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnG4QkxZfsb1-vAeHE0r6LrGeXnBlGaks",
  authDomain: "my-fitness-bro-97b27.firebaseapp.com",
  projectId: "my-fitness-bro-97b27",
  storageBucket: "my-fitness-bro-97b27.appspot.com",
  messagingSenderId: "1080944797403",
  appId: "1:1080944797403:web:0fc2780bb038abe01dcefe",
  measurementId: "G-WS8JL0V1ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);