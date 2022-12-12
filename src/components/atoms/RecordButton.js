import styles from "../atoms/atom.module.scss"
import DonutChart from "./DonutChart";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function RecordButton({rank, user}) {

    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5500/user/userId/${user.userId}`).then((response) => {
            console.log("Successfully Connected")
            setUserInfo(response.data);
        }).catch(() => {
            console.log("Error")
        })
    }, [user]);

    if (user) {
        console.log(user);
        const status = user.status;
        const count = status.filter(status => 'T' === status).length;
        const percent = count / status.length;

        return(
            <div className={styles.recordContainer}>
                <div className={styles.infoContainer}>
                    <div className={styles.rankContainer}>
                        <p>{rank}</p>
                    </div>
                    <div className={styles.profileBox}>
                        <img className={styles.profileImage} src={userInfo.imgUrl} alt="profile"></img>
                    </div>
                    <p>{userInfo.name}</p>
                </div>
                <div className={styles.chartWrapper}>
                    <DonutChart 
                        color="#1c8cc9"
                        percent={percent}
                        size="45px"
                        font="0.1rem"
                    />
                </div>
            </div>
        );
    } else return null;
}

export default RecordButton;