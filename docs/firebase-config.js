// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxmvGb5tMI6lNIsKE555B28iXYAZFZguE",
  authDomain: "employeesalarycalculator.firebaseapp.com",
  projectId: "employeesalarycalculator",
  storageBucket: "employeesalarycalculator.firebasestorage.app",
  messagingSenderId: "694034894636",
  appId: "1:694034894636:web:d28b445ec18a0011d6a689",
  measurementId: "G-P6B7XFQXH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
