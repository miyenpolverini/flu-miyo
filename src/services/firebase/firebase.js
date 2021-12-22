import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3_flfzBfTF5SI04nStQ8vYK0PdBs6FB0",
    authDomain: "app-tesysnet.firebaseapp.com",
    projectId: "app-tesysnet",
    storageBucket: "app-tesysnet.appspot.com",
    messagingSenderId: "68754414655",
    appId: "1:68754414655:web:9e81b971e9b1a928ee6c8a"
  };

const app = initializeApp(firebaseConfig)

export const dataBase = getFirestore(app)