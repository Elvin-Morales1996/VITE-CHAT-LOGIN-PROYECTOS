// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnwmXyy_pdhVpVux7IPAMGI782fDc3U_o",
  authDomain: "systema-wordl.firebaseapp.com",
  projectId: "systema-wordl",
  storageBucket: "systema-wordl.appspot.com",
  messagingSenderId: "394479190251",
  appId: "1:394479190251:web:494c8cbaad3c2a2fd2feae",
  measurementId: "G-BE9V76Z7C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app