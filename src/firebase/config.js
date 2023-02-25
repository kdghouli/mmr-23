// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIQvKpkOW8EmLQGZ7lNvfbr78EuEF_UvQ",
  authDomain: "mmr-2023.firebaseapp.com",
  projectId: "mmr-2023",
  storageBucket: "mmr-2023.appspot.com",
  messagingSenderId: "789296014194",
  appId: "1:789296014194:web:e09ace0b6cfe70741c33eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
const dbo = getFirestore(app);

export default dbo;
