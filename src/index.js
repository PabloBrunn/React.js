import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAToTkkTHfpFhzr4YK3DT0c4_nATTk9Lsw",
    authDomain: "talesworlds-316a9.firebaseapp.com",
    projectId: "talesworlds-316a9",
    storageBucket: "talesworlds-316a9.appspot.com",
    messagingSenderId: "533190083774",
    appId: "1:533190083774:web:2f277c69ed795fa4dccaef"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
