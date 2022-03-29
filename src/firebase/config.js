// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";

// import * as firebase from 'firebase/app';
// import 'firebase/storage';
// import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Your key here",
  authDomain: "firegram-imon.firebaseapp.com",
  projectId: "firegram-imon",
  storageBucket: "firegram-imon.appspot.com",
  messagingSenderId: "637647772807",
  appId: "Your Id",
  measurementId: "G-02WRE6GP29"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

initializeApp(firebaseConfig);
 

// firebase.initializeApp(firebaseConfig);
// const projectStorage = firebase.storage();
const projectStorage = getStorage();
// const projectFirestore = firebase.firestore();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };
