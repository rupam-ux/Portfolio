import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBZWdGvCoEf9Rvp7uQlyJG553pbLJjyWhI",
    authDomain: "article-72c87.firebaseapp.com",
    projectId: "article-72c87",
    storageBucket: "article-72c87.appspot.com",
    messagingSenderId: "625649542529",
    appId: "1:625649542529:web:2844346d9ecfb3b26b3480",
    measurementId: "G-MVD3WP3V6G"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };