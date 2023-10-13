import { initializeApp } from "firebase/app";
import { getMessaging, getToken, } from "firebase/messaging";
import { vapidPublicKey } from "./push";

const firebaseConfig = {
  apiKey: "AIzaSyCctsxg7poK1nX3VMqgo-ecqmDesz6EQqQ",
  authDomain: "joss-d2476.firebaseapp.com",
  databaseURL: "https://joss-d2476-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "joss-d2476",
  storageBucket: "joss-d2476.appspot.com",
  messagingSenderId: "242327484781",
  appId: "1:242327484781:web:dcee1bb379fb9aa8ccc264",
  measurementId: "G-BLNXRRD35D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const tokenGetter = () => getToken(messaging, {vapidKey: vapidPublicKey})
export function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}