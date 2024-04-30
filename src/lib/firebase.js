import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-web-chat-19938.firebaseapp.com",
  projectId: "react-web-chat-19938",
  storageBucket: "react-web-chat-19938.appspot.com",
  messagingSenderId: "372289944086",
  appId: "1:372289944086:web:fa6f72d422369fa79a5337",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
