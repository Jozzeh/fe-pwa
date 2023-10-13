//@ts-nocheck
import {useEffect, useState} from "react";
import styles from "./ChatPage.module.scss";
import Icon from "../basics/Icon/Icon";

const ChatPage = () => {
  const [chatLog, setChatLog] = useState([]);
  const [chatText, setChatText] = useState();

  function getChatLog() {
    fetch("https://bechat.josdeberdt.be")
      .then(response => response.json())
      .then(result => {
        setChatLog(result);
      });
  }

  useEffect(() => {
    // const pollInterval = setInterval(() => {
    //   getChatLog();
    // }, 5000);
    // return () => {
    //   clearInterval(pollInterval);
    // };
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatlog}>
        {chatLog.length === 0 ? (
          <>Nog geen berichten...</>
        ) : (
          <>
            {
              // MAP OVER CHATLOG
            }
          </>
        )}
      </div>
      <div className="p-6 flex items-center gap-4">
        <input
          type="text"
          value={chatText}
          className="border-2 border-solid border-blue-300 w-full py-2 px-4 rounded-full outline-none placeholder:text-gray-400 placeholder:font-normal"
          placeholder="Compose a message"
          onChange={(evt: any) => {
            setChatText(evt.target.value);
          }}
        />
        <button
          onClick={() => {
            fetch("https://bechat.josdeberdt.be", {
              method: "POST",
              body: JSON.stringify({timestamp: Date.now(), message: chatText, username: "test"})
            }).then(response => {
              if (response.ok) {
                setChatText("");
                getChatLog();
              }
            });
          }}
        >
          <Icon name="send" className="text-[#4768de] text-3xl font-medium" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
