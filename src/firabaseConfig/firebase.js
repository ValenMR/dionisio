// Desde acá se realizar la conexión a nuestro proyecto con firebase
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVWIJubtG55orYXsjg2A_45mAhJBvDnBY",
  authDomain: "crud-structuras-react.firebaseapp.com",
  projectId: "crud-structuras-react",
  storageBucket: "crud-structuras-react.appspot.com",
  messagingSenderId: "199350327313",
  appId: "1:199350327313:web:fd8979108afa23787e79b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)