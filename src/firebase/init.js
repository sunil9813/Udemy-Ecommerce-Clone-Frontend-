import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq4ALXJG4XpZi-UvtAdNJyQrc6WSNYc5w",
  authDomain: "smart-moodle-e3f34.firebaseapp.com",
  projectId: "smart-moodle-e3f34",
  storageBucket: "smart-moodle-e3f34.appspot.com",
  messagingSenderId: "350644974292",
  appId: "1:350644974292:web:326d12cf39ecf3b8598141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export default db;
