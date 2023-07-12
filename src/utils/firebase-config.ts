import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBV-1tQKY91bsz3d-ikZoMyj9xtdBL17PE",
    authDomain: "react-netflix-1c315.firebaseapp.com",
    projectId: "react-netflix-1c315",
    storageBucket: "react-netflix-1c315.appspot.com",
    messagingSenderId: "1040267175021",
    appId: "1:1040267175021:web:7e39b7e59150ca25380b64",
    measurementId: "G-26K0ZF56ZK"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)