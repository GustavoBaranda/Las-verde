import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaXYMLJWlmUyPuRTRjkO0K6DnuAM3Z9FI",
  authDomain: "las-verde-web.firebaseapp.com",
  projectId: "las-verde-web",
  storageBucket: "las-verde-web.appspot.com",
  messagingSenderId: "145066438818",
  appId: "1:145066438818:web:49cacd143259264c3027fb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, "products");
