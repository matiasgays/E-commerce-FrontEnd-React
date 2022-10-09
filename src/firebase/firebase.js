import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_UTT0trpJmll27XVHamn6VX6MgabSzS8",
  authDomain: "reactcoderhouse-a143e.firebaseapp.com",
  projectId: "reactcoderhouse-a143e",
  storageBucket: "reactcoderhouse-a143e.appspot.com",
  messagingSenderId: "678049932349",
  appId: "1:678049932349:web:788c28d0e7e0060cef3654"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)