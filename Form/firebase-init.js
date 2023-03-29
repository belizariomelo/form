// firebase-init.js

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyC4iWtXt3teaioZVncJOIaTlHc_eEIQ4Ps",
    authDomain: "teste-form-381516.firebaseapp.com",
    databaseURL: "https://teste-form-381516-default-rtdb.firebaseio.com",
    projectId: "teste-form-381516",
    storageBucket: "teste-form-381516.appspot.com",
    messagingSenderId: "62011812101",
    appId: "1:62011812101:web:440ee23f4adf2a9060ef6c",
    measurementId: "G-94DYJ4L7ZM"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();