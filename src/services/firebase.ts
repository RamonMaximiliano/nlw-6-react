import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyAFheLHtvg5ZdOZxd8Fs1s8LEfNZEGNUik",
  authDomain: "letmeask-f67c7.firebaseapp.com",
  databaseURL: "https://letmeask-f67c7-default-rtdb.firebaseio.com",
  projectId: "letmeask-f67c7",
  storageBucket: "letmeask-f67c7.appspot.com",
  messagingSenderId: "1085379999134",
  appId: "1:1085379999134:web:d5cd798345bebc4341d28f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);



/*

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database(); 

*/

 
