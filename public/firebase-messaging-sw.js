importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyCctsxg7poK1nX3VMqgo-ecqmDesz6EQqQ",
  authDomain: "joss-d2476.firebaseapp.com",
  databaseURL: "https://joss-d2476-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "joss-d2476",
  storageBucket: "joss-d2476.appspot.com",
  messagingSenderId: "242327484781",
  appId: "1:242327484781:web:dcee1bb379fb9aa8ccc264",
  measurementId: "G-BLNXRRD35D"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
