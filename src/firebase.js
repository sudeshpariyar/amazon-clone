import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDmVbDIl3B4yINeTkU49GE598qJn1jxNGw",
        authDomain: "clone-9e0ea.firebaseapp.com",
        databaseURL: "https://clone-9e0ea.firebaseio.com",
        projectId: "clone-9e0ea",
        storageBucket: "clone-9e0ea.appspot.com",
        messagingSenderId: "945339460878",
        appId: "1:945339460878:web:4171bed17f7332951ffb5f",
        measurementId: "G-80H1D2B1HJ"
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};