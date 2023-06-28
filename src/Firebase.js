// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCObISB60_nN6rmXDgwmsNfTzOrbhuE6dA",
  authDomain: "whatsapp-d9d62.firebaseapp.com",
  projectId: "whatsapp-d9d62",
  storageBucket: "whatsapp-d9d62.appspot.com",
  messagingSenderId: "920376422202",
  appId: "1:920376422202:web:686acc38bc35a96773aa03",
  measurementId: "G-QCE904DPV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);