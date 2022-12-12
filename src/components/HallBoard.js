import styles from "../components/styles/hall.module.scss"
import { useState } from "react";

import Hall from "./Hall";

import axios from "axios";
import { useEffect } from "react";
import port from "./../assets/port.json";

function HallBoard() {

    const [list, setList] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        axios.get(`${port.url}/user/point`).then((response) => {
            console.log("Successfully Connected")
            setList(response.data);
        }).catch(() => {
            console.log("Error")
        })
    }, []);

    const hallList = list.slice(0, 6);

    return (
        <div className={styles.boardContainer}>
            <div>
                <div className={styles.titleContainer}>
                    <p>명예의 전당</p>
                    <div className={styles.arrayContainer}>
                        <p>{date.toLocaleDateString('ko-kr')} 기준</p>
                    </div>
                </div>
                <div className={styles.componentContainer}>
                    {hallList.map((user) => (
                        <div className={styles.componentWrapper}>
                            <Hall
                                props={user}
                            /> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HallBoard;