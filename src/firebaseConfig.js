// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {firebaseCredentials} from './firebaseCredentials'


import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
  signOut,

} from 'firebase/auth'


// Initialize Firebase
const app = initializeApp(firebaseCredentials);
const analytics = getAnalytics(app);

export {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
  signOut
}