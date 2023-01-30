// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Getdata } from "./Getdata";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApANfKG20UKhtVR8Cmg0q2zk7XsPMQwxU",
  authDomain: "electricproj-5f210.firebaseapp.com",
  projectId: "electricproj-5f210",
  storageBucket: "electricproj-5f210.appspot.com",
  messagingSenderId: "819353710614",
  appId: "1:819353710614:web:8614e2e29595c9c6688537"
};

const firebaseApp = initializeApp(firebaseConfig);
const dp = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


export{firebaseApp};
export{storage};
export default dp;