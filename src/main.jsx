import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwgvO5-qeXHBxD-tTgorUxtiO3DTL-S2s",
  authDomain: "react-marco-leskovar.firebaseapp.com",
  projectId: "react-marco-leskovar",
  storageBucket: "react-marco-leskovar.appspot.com",
  messagingSenderId: "512340430731",
  appId: "1:512340430731:web:e0977bbaba8a325034298e"
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
