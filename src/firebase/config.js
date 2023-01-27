import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAWGC8KMWj9t7XBEe7sgst5fliG-iZnNkI",
    authDomain: "olx-clone-81ee5.firebaseapp.com",
    projectId: "olx-clone-81ee5",
    storageBucket: "olx-clone-81ee5.appspot.com",
    messagingSenderId: "658112718253",
    appId: "1:658112718253:web:611839cc5929e551682d24",
    measurementId: "G-PS8YNTH61G"
  };

  export default firebase.initializeApp(firebaseConfig)