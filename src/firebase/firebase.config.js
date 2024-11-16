// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxQxj-KoafDn51cbdMLyo8qXDSrddhlII",
  authDomain: "coffe-store-14399.firebaseapp.com",
  projectId: "coffe-store-14399",
  storageBucket: "coffe-store-14399.firebasestorage.app",
  messagingSenderId: "340777348671",
  appId: "1:340777348671:web:549fa59961f2d15517d28a",
  measurementId: "G-S28TECXCRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app