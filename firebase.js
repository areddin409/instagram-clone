// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFFHUj1dmsadTZM4oSaxOTsap_G0YZUgM',
  authDomain: 'instagram-clone-a6ac2.firebaseapp.com',
  projectId: 'instagram-clone-a6ac2',
  storageBucket: 'instagram-clone-a6ac2.appspot.com',
  messagingSenderId: '685641720169',
  appId: '1:685641720169:web:a4047fbe2e70d2768f1df8'
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
