import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTyjjg9XUVfzuxoL-1QbjXOMxRut8qj_w",
  authDomain: "promerge-77.firebaseapp.com",
  projectId: "promerge-77",
  storageBucket: "promerge-77.firebasestorage.app",
  messagingSenderId: "43078751800",
  appId: "1:43078751800:web:df05bfe75eeb348ffcb8cd",
  measurementId: "G-WEEYGM82WK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
