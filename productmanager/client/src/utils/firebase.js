// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-eac64.firebaseapp.com",
  projectId: "task-manager-eac64",
  storageBucket: "task-manager-eac64.firebasestorage.app",
  messagingSenderId: "714123434865",
  appId: "1:714123434865:web:2fc1dd80423d6c316334d0",
  measurementId: "G-CKMHLFXPNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);