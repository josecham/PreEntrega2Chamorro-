import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuQwpTkc6H-G7LPjhQ8H5bfp2lt04ZhO8",
  authDomain: "dc-comics-fe3ef.firebaseapp.com",
  projectId: "dc-comics-fe3ef",
  storageBucket: "dc-comics-fe3ef.appspot.com",
  messagingSenderId: "727379657875",
  appId: "1:727379657875:web:a127905af6be82dc43f966"
  //SDK de conexion
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
