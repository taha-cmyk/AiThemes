// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhP_BUvQLd5tlZnxkdGsCcsy7Ga5FTcxc",
  authDomain: "techpulse-bd28e.firebaseapp.com",
  projectId: "techpulse-bd28e",
  storageBucket: "techpulse-bd28e.appspot.com",
  messagingSenderId: "133907620525",
  appId: "1:133907620525:web:66038cd29c6bb154dddc24",
  measurementId: "G-B5HWE25N4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// TODO : const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider()
export const auth = getAuth(app);