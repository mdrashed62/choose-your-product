// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvbL3Igjnz5xemy6w25flC94zUKunmOC8",
  authDomain: "choose-your-products.firebaseapp.com",
  projectId: "choose-your-products",
  storageBucket: "choose-your-products.appspot.com",
  messagingSenderId: "365662142553",
  appId: "1:365662142553:web:6b126ce72d8aa135b9f148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;