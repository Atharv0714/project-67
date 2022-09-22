import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC4OSPsQ40eJQektrZSJHbJNBk44AI_xg0",
    authDomain: "project-67-e770e.firebaseapp.com",
    projectId: "project-67-e770e",
    storageBucket: "project-67-e770e.appspot.com",
    messagingSenderId: "906217069924",
    appId: "1:906217069924:web:f0a308cc41229a2067ae71"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();