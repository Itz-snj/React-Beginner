import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAb6XIukL1d2Qbu_VdLylqI7P3xZyTI7VI",
  authDomain: "positivus-cb2eb.firebaseapp.com",
  projectId: "positivus-cb2eb",
  storageBucket: "positivus-cb2eb.firebasestorage.app",
  messagingSenderId: "140294005011",
  appId: "1:140294005011:web:e3d34d3cca2e73ae3fbae6",
  measurementId: "G-00S7LCGC16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication

export { app, analytics, auth }; // Export auth properly
