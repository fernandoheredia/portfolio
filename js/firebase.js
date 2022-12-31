
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  import {getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQ-in5-vF0rdzCW-ZUJUn-q6SrFDefZZs",
    authDomain: "portfolio-d29c2.firebaseapp.com",
    projectId: "portfolio-d29c2",
    storageBucket: "portfolio-d29c2.appspot.com",
    messagingSenderId: "159931662889",
    appId: "1:159931662889:web:f117f3c746b5a376ded238",
    measurementId: "G-YVKDMCTQN8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

  export const saveTask = (names,emails,websites,messages) =>
    addDoc(collection(db,"contact"),{names,emails,websites,messages});
