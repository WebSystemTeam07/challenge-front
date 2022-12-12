import Challenge from "../components/Challenge.js"
import ContentList from "../data/ContentList.js";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

import axios from "axios";

import styles from "../components/styles/challenge.module.scss"

function ChallengeBoard() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5500/challenge/group/uptodate`).then((response) => {
            console.log("Successfully Connected")
            setList(response.data);
        }).catch(() => {
            console.log("Error")
        })
    }, []);

    const challengeList = list.slice(0, 8);

    return(
        <div className={styles.boardContainer}>
            <div className={styles.titleContainer}>
                <p>현재 진행중인 챌린지</p>
                <div className={styles.arrayContainer}>
                    <p>최신 순</p>
                    <ExpandMoreIcon fontSize="small"></ExpandMoreIcon> 
                </div>  
            </div>
            <div className={styles.challengeWrapper}>
                <div className={styles.challengeContainer}>
                    {challengeList.map((challenge) => (
                        <Challenge
                            props={challenge}
                        />
                    ))}
                </div>
                <div className={styles.buttonWrapper}>
                    <Link to="/groupchallengepage" style={{ textDecoration: "none" }}>
                        <div className={styles.moreButton}><p>더 보러 가기</p></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ChallengeBoard;