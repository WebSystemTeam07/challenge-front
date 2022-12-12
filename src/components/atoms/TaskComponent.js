import { Link, useNavigate } from "react-router-dom";
import styles from "./article.module.scss"

import { useEffect } from "react";
import axios from "axios";
import port from "../../assets/port.json";
import { useState } from "react";

function TaskComponent({props, index, challengeId}) {

    console.log(props);
    
    const navigate = useNavigate();

    const date = new Date(props.date)
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const day = date.getDate();

    const dayOfWeek = week[date.getDay()];

    const [user, setUser] = useState("");

    useEffect(() => {

        // if(props) {
        //     axios.get(port.url + `/user/userId/${userId}`).then((response) => {
        //         console.log("Successfully Connected")
        //         setUser(response.data);
        //     }).catch(() => {
        //         console.log("Error")
        //     });
        // }

    }, []);

    const onClickHandler = () => {
        navigate("/groupchallengepage/board/detail/article/task", { state: { usertaskId : props.usertaskId, date: props.date, challengeId: challengeId } })
    }

    return(
        <div className={styles.articleContainer} onClick={onClickHandler}>
            <div className={styles.keyWrapper}>
                <p>{index}</p>
            </div>
            <div className={styles.titleWrapper}>
                <p>{props.title}</p>
            </div>
            <div className={styles.nameWrapper}>
                {/* <p>{user.name}</p> */}
            </div>
            <div className={styles.dateWrapper}>
                <div className={styles.dateContainer}>
                    { month < 10 ? 
                        ( day < 10 ? <p>{year}-0{month}-0{day}</p> : <p>{year}-0{month}-{day}</p>) : 
                        (day < 10 ? <p>{year}-{month}-0{day}</p> : <p>{year}-{month}-{day}</p>)}
                    <p>({dayOfWeek})</p>
                </div>
            </div>
        </div>
    );
}

export default TaskComponent;