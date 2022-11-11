
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCl3Wi2mPluHEUU0fY_71RkyLOh8sSgrNg",
    authDomain: "webchat-react-firebase-9cc40.firebaseapp.com",
    projectId: "webchat-react-firebase-9cc40",
    storageBucket: "webchat-react-firebase-9cc40.appspot.com",
    messagingSenderId: "919759829036",
    appId: "1:919759829036:web:1084d3877ae9fadf74f989"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);