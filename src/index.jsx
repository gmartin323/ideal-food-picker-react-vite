import React from "react";
import ReactDOM from "react-dom/client";
import "https://kit.fontawesome.com/6b203b1712.js";
import "./index.css";
import App from "./App"; 

/* import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsZJmRt-MDp8ykIujmkiQIT0NXrIUf0ZY",
  authDomain: "ideal-restaurant-picker.firebaseapp.com",
  projectId: "ideal-restaurant-picker",
  storageBucket: "ideal-restaurant-picker.appspot.com",
  messagingSenderId: "574212382818",
  appId: "1:574212382818:web:551ba450dd3356fa8f313b"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export { db } */

const DOM = ReactDOM.createRoot(document.getElementById("root"))
DOM.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>
);
