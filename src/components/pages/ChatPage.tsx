//@ts-nocheck
import {useEffect, useState} from "react";
import styles from "./ChatPage.module.scss";

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
    const pollInterval = setInterval(() => {
      getChatLog();
    }, 5000);
    return () => {
      clearInterval(pollInterval);
    };
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
      <div className={styles.chatForm}>
        <input
          type="text"
          value={chatText}
          onChange={(evt: any) => {
            setChatText(evt.target.value);
          }}
        />
        <br />
        <input
          type="button"
          value="Verzend"
          onClick={() => {
            fetch("https://bechat.josdeberdt.be", {
              method: "POST",
              body: JSON.stringify({timestamp: Date.now(), message: chatText, username: "test"}),
            }).then(response => {
              if (response.ok) {
                setChatText("");
                getChatLog();
              }
            });
          }}
        />
      </div>
    </div>
  );
};

export default ChatPage;
