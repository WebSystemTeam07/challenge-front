import { useState, useCallback, useContext } from 'react';
import { SocketContext, SOCKET_EVENT } from "../../../service/socket";

import styles from "./component.module.scss"
import SendIcon from '@mui/icons-material/Send';

function InputComponent({name}) {

    const [message, setMessage] = useState("");

    const socket = useContext(SocketContext);
    const placeholder = "'" + name + "' (으)로 메세지를 남겨보세요!"

    const handleMessage = useCallback((e) => {
        e.preventDefault();

        if (message.length > 0) {
            socket.emit(SOCKET_EVENT.SEND, {
                name,
                content: message,
            })
            setMessage("");
        }
    }, [socket, name, message]);

    return(
        <div className={styles.formContainer}>
            <form onSubmit={handleMessage}>
                <div className={styles.inputWrapper}>
                    <textarea
                        placeholder={placeholder}
                        value={message}
                        onChange={({target: {value}}) => setMessage(value)}
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