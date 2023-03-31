// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBaGRpnXESC_HVya6Zq_kCLLTaDier3504",
	authDomain: "telegram-4d8d1.firebaseapp.com",
	projectId: "telegram-4d8d1",
	storageBucket: "telegram-4d8d1.appspot.com",
	messagingSenderId: "775524093796",
	appId: "1:775524093796:web:68d4a019b7bac4223eb471",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
