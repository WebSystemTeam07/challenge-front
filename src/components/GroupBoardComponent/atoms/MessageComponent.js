import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { SocketContext, SOCKET_EVENT } from "../../../service/socket";

import InputComponent from "./InputComponent";
import { makeMessage } from "../../../service/socket";

import styles from "./component.module.scss"

function MessageComponent({name}) {
    const [messages, setMessages] = useState([]);
    const window = useRef();
    const socket = useContext(SocketContext);

    const scrollToBottom = useCallback(() => {
        if (window.current) {
            window.current.scrollTo({
                top: window.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, []);

    const handleMessage = useCallback((receiveMessage) => {
        const newMessage = makeMessage(receiveMessage);
        setMessages((message) => [...message, newMessage]);
        scrollToBottom();
    }, [scrollToBottom]);

    useEffect(() => {
        socket.on(SOCKET_EVENT.RECEIVE, handleMessage);
        scrollToBottom();

        return () => {
            socket.off(SOCKET_EVENT.RECEIVE, handleMessage);
        }
    });

    return(
        <div className={styles.messageContainer}>
            <div className={styles.messageComponentContainer} ref={window}>
                {messages.map((message) => {
                    const { nickname, content, time } = message;
                    console.log(message);
                    return(
                        <>
                            { nickname !== undefined ? 
                                <div className={styles.messageComponent}>
                                    <div className={styles.nameWrapper}>{nickname}</div>
                                        <div className={styles.timeContainer}>
                                        <p className={styles.timeText}>{time}</p>
                                        <div className={styles.messageWrapper}>
                                            <p>{content}</p>
                                        </div>
                                    </div>
                                </div>
                            : <div className={styles.joinComponent}><p>{content}</p></div>}
                        </>
                    );
                })}
            </div>
            <div className={styles.inputComponentContainer}>
                <InputComponent name={name} />
            </div>
        </div>
    );
}

export default MessageComponent;