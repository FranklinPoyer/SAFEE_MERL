// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLL4ZsuI6JA5lJXduUA7I8cixmUb4K-No",
  authDomain: "safeemerl.firebaseapp.com",
  projectId: "safeemerl",
  storageBucket: "safeemerl.firebasestorage.app",
  messagingSenderId: "244287007468",
  appId: "1:244287007468:web:48d99f339ad5c9607d13c9",
  measurementId: "G-7R4VBR8DGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the initialized app
export default app;
