import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { SocketContext, SOCKET_EVENT } from "../../../service/socket";

import InputComponent from "./InputComponent";
import { makeMessage } from "../../../service/socket";

import styles from "./component.module.scss"

function MessageComponent({name}) {
    const [messages, setMessages] = useState([]);
    const window = useRef(null);
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

        return () => {
            socket.off(SOCKET_EVENT.RECEIVE, handleMessage);
        }
    });

    return(
        <div className={styles.messageContainer}>
            <div>
                {messages.map((message) => {
                    const { name, content, time } = message;
                    return(
                        <div>
                            <div>{name}</div>
                            <div>{content}</div>
                            <div>{time}</div>
                        </div>
                    );
                })}
            </div>
            <div>
                <InputComponent name={name} />
            </div>
        </div>
    );
}

export default MessageComponent;