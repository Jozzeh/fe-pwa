//@ts-nocheck
import {useEffect, useState} from "react";
import styles from "./ChatPage.module.scss";
import Icon from "../basics/Icon/Icon";
import classNames from "classnames";
import {usePersistentUserStore} from "../../state/stores/usePersistentUserStore";
import ScrollAnchor from "../basics/ScrollAnchor/ScrollAnchor";
import {onMessage} from "firebase/messaging";
import {messaging, tokenGetter} from "../../utils/funcs/firebase";

const ChatPage = () => {
  const currentUser = usePersistentUserStore(store => store.userName);
  const chatLog = usePersistentUserStore(store => store.chats);
  const storeChats = usePersistentUserStore(state => state.storeChats);
  const [chatText, setChatText] = useState("");

  const sendMessage = () => {
    tokenGetter().then(currentToken => {
      fetch("https://bechat.josdeberdt.be", {
        method: "POST",
        body: JSON.stringify({
          timestamp: Date.now(),
          message: chatText,
          username: currentUser,
          token: currentToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(console.log);
    });
  };

  const getMessages = () => {
    fetch("https://bechat.josdeberdt.be")
      .then(response => response.json())
      .then(result => {
        storeChats(result);
      });
  };

  useEffect(() => {
    getMessages();
    const un = onMessage(messaging, () => {
      new Notification("Ping!");
      getMessages();
    });

    return un;
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className="p-6 lg:p-10 flex-1">
        {chatLog.length === 0 ? (
          <>Nog geen berichten...</>
        ) : (
          <div className="">
            {chatLog.map((message, index) => {
              const firstInBunch = index === 0 ? false : chatLog[index - 1].username === message.username;

              return (
                <div
                  key={message.id}
                  className={classNames(
                    "flex flex-col",
                    firstInBunch ? "mt-1" : "mt-4",
                    currentUser === message.username ? "items-end" : "items-start"
                  )}>
                  {!firstInBunch && <h5>{message.username}</h5>}
                  <div
                    className={classNames(
                      styles.message,
                      "rounded-full w-fit py-2 px-3",

                      currentUser === message.username ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-950"
                    )}>
                    {message.message}
                  </div>
                </div>
              );
            })}
            <ScrollAnchor />
          </div>
        )}
      </div>
      <div className="p-6 flex items-center gap-4 sticky bottom-0 bg-white">
        <input
          type="text"
          value={chatText}
          className="border-2 border-solid border-blue-300 w-full py-2 px-4 rounded-full outline-none placeholder:text-gray-400 placeholder:font-normal"
          placeholder="Compose a message"
          onChange={(evt: any) => {
            setChatText(evt.target.value);
          }}
        />
        <button onClick={sendMessage}>
          <Icon name="send" className="text-[#4768de] text-3xl font-medium" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
