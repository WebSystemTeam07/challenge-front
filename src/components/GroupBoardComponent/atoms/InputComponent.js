import { useState, useCallback, useContext } from 'react';
import { SocketContext, SOCKET_EVENT } from "../../../service/socket";

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
        <div>
            <form onSubmit={handleMessage}>
                <input 
                    type='text'
                    placeholder={placeholder}
                    value={message}
                    onChange={({target: {value}}) => setMessage(value)}
                    onKeyPress={(e) => e.key === 'Enter' ? handleMessage(e) : null}
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}

export default InputComponent;