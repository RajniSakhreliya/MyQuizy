import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAAjb9y5O4GIBcX8e623qM7VcTrlJduUPw",
  authDomain: "quizy-club.firebaseapp.com",
  projectId: "quizy-club",
  storageBucket: "quizy-club.appspot.com",
  messagingSenderId: "345626325662",
  appId: "1:345626325662:web:73f445f3f3e6cc6d2ac18f",
  measurementId: "G-ZTE4JYMLFJ"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export const SingWithGoogls = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    })
    .catch((e)=>{
    })
}

export { app, provider }
export default db;