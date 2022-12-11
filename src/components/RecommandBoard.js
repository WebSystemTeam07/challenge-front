import Recommand from "../components/Recommand.js";
import RecommandList from "../data/RecommandList.js";

import styles from "../components/styles/recommand.module.scss"

import { useEffect, useState } from "react";
import axios from "axios";

function RecommandBoard() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5500/challenge/group/uptodate`).then((response) => {
            console.log("Successfully Connected")
            setList((response.data).sort(() => Math.random() - 0.5));
        }).catch(() => {
            console.log("Error")
        })
    }, []);

    const recommandList = list.slice(0, 2);

    return (
        <div className={styles.boardContainer}>
            <div className={styles.textContainer}>
                <p>어떻게 챌린지를 시작할 지 모르겠다면?</p>
                <p><span>오늘의 추천 챌린지</span>를 만나보세요!</p>
            </div>
            <div className={styles.contentContainer}>
                {recommandList.map((recommand) => (
                    <Recommand
                        props={recommand}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecommandBoard;