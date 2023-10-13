const vapidPublicKey =
  "< Your Public VAPID Key Here >"
// const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)

// function urlBase64ToUint8Array(base64String: string) {
//   const padding = "=".repeat((4 - base64String.length % 4) % 4)
//   const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

//   const rawData = window.atob(base64)
//   const outputArray = new Uint8Array(rawData.length)

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i)
//   }
//   return outputArray
// }

// export default function subscribePush() {
//   navigator.serviceWorker.ready.then(registration => {
//     if (!registration.pushManager) {
//       alert("Push Unsupported")
//       return
//     }
    
//     registration.pushManager
//       .subscribe({
//         userVisibleOnly: true, //Always display notifications
//         applicationServerKey: convertedVapidKey
//       })
//       .then(subscription => axios.post("/api/push/register", subscription))
//       .catch(err => console.error("Push subscription error: ", err))
//   })
// }

export default {}