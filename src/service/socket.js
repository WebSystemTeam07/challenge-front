import { createContext } from 'react';
import { io } from "socket.io-client";
import dayjs from "dayjs";

const ENDPOINT = "http://localhost:5500";

export const socket = io.connect(ENDPOINT, {
    cors: {origin: '*'}
});

export const SocketContext = createContext(socket);

export const SOCKET_EVENT = {
    JOIN: "JOIN_ROOM",
    SEND: "SEND_MESSAGE",
    RECEIVE: "RECEIVE_MESSAGE",
};

export const makeMessage = (data) => {
    const {name, content, type, time} = data;
    
    let receiveName;
    let receiveContent = "";

    if (type === SOCKET_EVENT.JOIN) {
        receiveContent = `${name} 님이 들어왔습니다.`;
    } else if (type === SOCKET_EVENT.SEND) {
        receiveContent = String(content);
        receiveName = name;
    }

    return {
        nickname: receiveName,
        content: receiveContent,
        time: dayjs(time).format("HH:mm")
    }
}

socket.on("connect", () => {
    console.log("socket server connected.");
});

socket.on("disconnect", () => {
    console.log("socket server disconnected.");
});