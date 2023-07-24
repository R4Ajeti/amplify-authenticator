import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
export const initializeFirebaseApp = () => {
  firebase.initializeApp(firebaseConfig);
}