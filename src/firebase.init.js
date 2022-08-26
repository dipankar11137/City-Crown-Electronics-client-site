// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdNKc_1iZxLnv4z-3wm5Na8IfxwYXdl9I",
  authDomain: "city-crown-electronics.firebaseapp.com",
  projectId: "city-crown-electronics",
  storageBucket: "city-crown-electronics.appspot.com",
  messagingSenderId: "1076206152813",
  appId: "1:1076206152813:web:e869bf3fd0d42846b2a364",
  measurementId: "G-1SB690408C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
