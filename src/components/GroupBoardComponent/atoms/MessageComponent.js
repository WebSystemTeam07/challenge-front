import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { SocketContext, SOCKET_EVENT } from "../../../service/socket";

import InputComponent from "./InputComponent";
import { makeMessage } from "../../../service/socket";

import styles from "./component.module.scss"
import axios from "axios";

function MessageComponent({id, name}) {
    const [oldMessages, setOldMessages] = useState([]);
    const [messages, setMessages] = useState(oldMessages);
    const window = useRef();
    const socket = useContext(SocketContext);

    const userName = name;

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
        axios.get(`http://localhost:5500/chat/messages/${id}`).then((response) => {
            setOldMessages(response.data);
            console.log(messages);
        });
    }, [])

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
                <div>
                    { oldMessages.map((message) => {
                        const { name, content, time } = message;
                        return(
                            <>
                                <div className={styles.receiveComponent}>
                                    <div className={styles.receiveNameWrapper}>{name}</div>
                                    <div className={styles.receiveTimeContainer}>
                                        <div className={styles.contentWrapper}>
                                            <p>{content}</p>
                                        </div>
                                        <p className={styles.timeText}>{time}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div>
                    { messages.map((message) => {
                        const { name, content, time } = message;
                        return(
                            <>
                                { name !== undefined ? 
                                    ( name === userName ? 
                                        <div className={styles.messageComponent}>
                                            <div className={styles.nameWrapper}>{name}</div>
                                                <div className={styles.timeContainer}>
                                                <p className={styles.timeText}>{time}</p>
                                                <div className={styles.messageWrapper}>
                                                    <p>{content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    :   <div className={styles.receiveComponent}>
                                            <div className={styles.receiveNameWrapper}>{name}</div>
                                            <div className={styles.receiveTimeContainer}>
                                                <div className={styles.contentWrapper}>
                                                    <p>{content}</p>
                                                </div>
                                                <p className={styles.timeText}>{time}</p>
                                            </div>
                                        </div>
                                    )
                                : <div className={styles.joinComponent}><p>{content}</p></div> }
                            </>
                        );
                    })}
                </div>
            </div>
            <div className={styles.inputComponentContainer}>
                <InputComponent 
                    id={id}
                    name={name} 
                />
            </div>
        </div>
    );
}

export default MessageComponent;