import { useState, useEffect } from 'react';
import { socket, SocketContext, SOCKET_EVENT } from '../../service/socket';

import { FirstNameList, LastNameList } from '../../data/NameList';

import MessageComponent from './atoms/MessageComponent';
import styles from "./styles/chat.module.scss"

function ChattingBoard({props}) {

    const [name, setName] = useState("");

    useEffect(() => {
        const randomName = FirstNameList[Math.floor(Math.random() * FirstNameList.length)] + LastNameList[Math.floor(Math.random() * LastNameList.length)];
        console.log(randomName);
        setName(randomName);
    }, [])
    

    useEffect(() => {
        return () => {
            socket.close();
        }
    }, []);

    useEffect(() => {
        socket.emit(SOCKET_EVENT.JOIN, {name});
    }, [name]);

    return(
        <div className={styles.chatContainer}>
            <SocketContext.Provider value={socket}>
                <MessageComponent 
                    id={props.id}
                    name={name}
                />
            </SocketContext.Provider>
        </div>
    );
}

export default ChattingBoard;