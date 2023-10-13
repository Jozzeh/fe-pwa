import { FC } from 'react';
import Icon from './components/basics/Icon/Icon';

interface Props {};

const App: FC<Props> = () => {
  function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
         new Notification("Hi there!");
          // …
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
  
  return (
    <div className="p-20 bg-[#2F59F0] relative h-[50vh] flex flex-col items-center justify-center">
      <div className="mb-6">
        <Icon name="mark_chat_unread" className="text-3xl text-[#99aef7]" />
      </div>
      <h2 className="text-center text-white text-2xl mb-4">A proof of concept on</h2>
      <h1 className="text-center font-bold text-white">Push Notifications</h1>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <button 
          onClick={notifyMe} 
          className="rounded-full bg-white py-3 px-5 text-uppercase font-bold text-[#334790] text-lg shadow-xl flex items-center gap-3 border-2 border-solid border-[#d8e1ff] active:scale-90"
        >
          <span>Send a notification</span>
          <Icon name="send" className="text-[#4768de] text-2xl" />
        </button>
      </div>
    </div>
  )
}

export default App;