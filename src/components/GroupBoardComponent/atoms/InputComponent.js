import { useState, useCallback, useContext } from 'react';
import { SocketContext, SOCKET_EVENT } from "../../../service/socket";

import dayjs from "dayjs";
import axios from 'axios';

import styles from "./component.module.scss"
import SendIcon from '@mui/icons-material/Send';

function InputComponent({id, name}) {

    const [message, setMessage] = useState("");
    const [time, setTime] = useState(dayjs(new Date()).format("HH:mm"))

    const socket = useContext(SocketContext);
    const placeholder = "'" + name + "' (으)로 메세지를 남겨보세요!"

    const handleMessage = useCallback((e) => {
        e.preventDefault();

        if (message.length > 0) {

            axios({
                method: "post",
                url: `http://localhost:5500/chat/send`,
                data: {
                    channel: "17302",
                    name: name,
                    content: message,
                    time: time,
                }
            }).then(() => {
                alert("채팅이 정상적으로 추가되었습니다.");
            }).catch(() => {
                alert("서버 에러");
            });

            socket.emit(SOCKET_EVENT.SEND, {
                name,
                content: message,
                time: time,
            })

            setMessage("");
        }
    }, [socket, name, message, time]);

    return(
        <div className={styles.formContainer}>
            <form onSubmit={handleMessage}>
                <div className={styles.inputWrapper}>
                    <textarea
                        placeholder={placeholder}
                        value={message}
                        onChange={({target: {value}}) => { setMessage(value); setTime(dayjs(new Date()).format("HH:mm"))}}
                        onKeyPress={(e) => e.key === 'Enter' ? handleMessage(e) : null}
                        className={styles.inputContainer}
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <button type="submit"><SendIcon style={{ fill: '#1c8cc9' }} /></button>
                </div>
            </form>
        </div>
    );
}

export default InputComponent;