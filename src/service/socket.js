import { createContext } from 'react';
import { io } from "socket.io-client";
import dayjs from "dayjs";

import axios from 'axios';

const ENDPOINT = "http://localhost:5500";

export const socket = io.connect(ENDPOINT, {
    cors: {origin: '*'},
    credentials: true,
});

export const SocketContext = createContext(socket);

export const SOCKET_EVENT = {
    JOIN: "JOIN_ROOM",
    SEND: "SEND_MESSAGE",
    RECEIVE: "RECEIVE_MESSAGE",
    LEAVE: "LEAVE_MESSAGE",
};

export const makeMessage = (data) => {
    const {name, content, type, time} = data;
    
    let receiveName;
    let receiveContent;
    let receiveTime;

    if (type === SOCKET_EVENT.JOIN && name.length > 1) {
        receiveContent = `'${name}' 님이 들어왔습니다.`;

        return {
            name: receiveName,
            content: receiveContent
        }

    } else if (type === SOCKET_EVENT.SEND) {
        receiveContent = String(content);
        receiveName = name;
        receiveTime = dayjs(time).format("HH:mm");

        return {
            name: receiveName,
            content: receiveContent,
            time: receiveTime
        }
    } else if (type === SOCKET_EVENT.LEAVE) {
        receiveContent = `'${name}' 님이 나갔습니다.`

        return {
            name: receiveName,
            content: receiveContent
        }
    } else {
        return {}
    }
}

socket.on("connect", () => {
    console.log("socket server connected.");
});

socket.on("disconnect", () => {
    console.log("socket server disconnected.");
});