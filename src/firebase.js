import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBC02Jozo0TEDEGOIP4Tw2KAaVPqCr9o0w",
    authDomain: "slack-clone-c52bf.firebaseapp.com",
    databaseURL: "https://slack-clone-c52bf.firebaseio.com",
    projectId: "slack-clone-c52bf",
    storageBucket: "slack-clone-c52bf.appspot.com",
    messagingSenderId: "340394144121",
    appId: "1:340394144121:web:7ab83d2c0aaffb93173fa8",
    measurementId: "G-B38GPQL4DM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
