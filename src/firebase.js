import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCg3SHicVboBXnRO6baxYqNLAN-FHqRFrc",
    authDomain: "facebook-messenger-clone-98117.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-98117-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-98117",
    storageBucket: "facebook-messenger-clone-98117.appspot.com",
    messagingSenderId: "331732768441",
    appId: "1:331732768441:web:30e350d6eb0f5fda2b2d68",
    measurementId: "G-HLE5C7ZPQM"
});

const db = firebaseApp.firestore();

export default db;
