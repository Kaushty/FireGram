 import * as firebase from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD3_N1kcX1naCN1Xv4etGHDOPcQNRH_ofs",
    authDomain: "my-firegram-7fbc8.firebaseapp.com",
    databaseURL: "https://my-firegram-7fbc8.firebaseio.com",
    projectId: "my-firegram-7fbc8",
    storageBucket: "my-firegram-7fbc8.appspot.com",
    messagingSenderId: "335970772376",
    appId: "1:335970772376:web:b24d80d510bdf1101677ed"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFireStorage = firebase.firestore()

export { projectStorage, projectFireStorage }
