import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDk-srdEUj0cQCAG5fTHmC1_UiRVjtCJL0",
    authDomain: "nomad-twitter.firebaseapp.com",
    projectId: "nomad-twitter",
    storageBucket: "nomad-twitter.appspot.com",
    messagingSenderId: "85849393450",
    appId: "1:85849393450:web:ca5ac25c3bcdc5a791f653",
    measurementId: "G-WNTPSE5ZH7"
  };

  export default firebase.initializeApp(firebaseConfig);