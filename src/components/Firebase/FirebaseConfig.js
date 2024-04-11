
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOlHH6T2CfUmz3TWe9oD9S4XZfAF8i5eM",
  authDomain: "residential-homes-auth.firebaseapp.com",
  projectId: "residential-homes-auth",
  storageBucket: "residential-homes-auth.appspot.com",
  messagingSenderId: "339986037933",
  appId: "1:339986037933:web:96688366841841460f9a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;