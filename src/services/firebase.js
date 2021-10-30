// Connecting to firebase version 8.10.0 !
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDrl1X8afXeYwiEuk7nI57bGXjos-VEnj0",
  authDomain: "linked-me-in.firebaseapp.com",
  projectId: "linked-me-in",
  storageBucket: "linked-me-in.appspot.com",
  messagingSenderId: "656969813450",
  appId: "1:656969813450:web:c09f125e188df945b0d333"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }