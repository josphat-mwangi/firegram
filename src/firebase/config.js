import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIWnFI5_VJqrEGVU02Sai8zGa17way8z4",
    authDomain: "upload-da30f.firebaseapp.com",
    projectId: "upload-da30f",
    storageBucket: "upload-da30f.appspot.com",
    messagingSenderId: "895763710974",
    appId: "1:895763710974:web:1627e5aa3b5cf6b8d2f6af"
};

export const app = initializeApp (firebaseConfig);
export const projectStorage = getStorage(app);
export const projectFirestore = getFirestore(app);



