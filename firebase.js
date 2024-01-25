// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKTH8K2dcBkFK433aSE---RBTI15q26GI",
    authDomain: "ykcprojectapplication.firebaseapp.com",
    projectId: "ykcprojectapplication",
    storageBucket: "ykcprojectapplication.appspot.com",
    messagingSenderId: "222603439589",
    appId: "1:222603439589:web:097c4b5efb4499fd7ed30c"

};

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// const db = firebase.firestore();



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();