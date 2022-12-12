import Header from '../components/Header.js';
import Navigator from '../components/Navigator.js'
import Bar from '../components/Bar.js';
import Footer from '../components/Footer.js'

import MemberList from '../data/MemberList.js';
import ConfirmList from '../data/ConfirmList.js';
import NoticeList from '../data/NoticeList.js';

import NoticeBoard from '../components/GroupBoardComponent/NoticeBoard.js';
import ConfirmBoard from '../components/GroupBoardComponent/ConfirmBoard.js';
import GroupTitleBoard from '../components/GroupBoardComponent/GroupTitleBoard.js';
import RecordBoard from '../components/GroupBoardComponent/RecordBoard.js';
import SuccessRateBoard from '../components/GroupBoardComponent/SuccessRateBoard.js';
import ChattingBoard from '../components/GroupBoardComponent/ChattingBoard.js';

import styles from '../pages/styles/board.module.scss'
import port from "../assets/port.json";

import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

import axios from 'axios';

function GroupBoard() {

    const [challenge, setChallenge] = useState("");
    const [users, setUsers] = useState([]);
    const [notices, setNotices] = useState([]);
    const [confirms, setConfirms] = useState([]);

    const location = useLocation();
    const challengeId = location.state.challengeId;

    console.log(challengeId);

    useEffect(() => {

        axios.get(port.url + `/challenge/specific/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setChallenge(response.data);
        }).catch(() => {
            console.log("Error")
        });

        axios.get(port.url + `/userTask/all/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setUsers(response.data);
        }).catch(() => {
            console.log("Error")
        });

        axios.get(port.url + `/post/challenge/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setNotices(response.data);
        }).catch(() => {
            console.log("Error")
        })

        axios.get(port.url + `/task/challenge/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setConfirms(response.data);
        }).catch(() => {
            console.log("Error")
        })

    }, []);
    
    return (
        <div className={styles.bodyContainer}>
            <Bar path={"전체보기 > 그룹 챌린지 > 상세 > "} content={"그룹 게시판"} />
            <div className={styles.boardContainer}>
                <GroupTitleBoard 
                    challenge={challenge}
                />
                <div className={styles.firstContainer}>
                    <div className={styles.successWrapper}>
                        <SuccessRateBoard 
                            challenge={challenge}
                            users={users}
                        />
                    </div>
                    <div className={styles.recordWrapper}>
                        <RecordBoard props={users} />
                    </div>               
                </div>
                <div>
                    <NoticeBoard props={notices} id={challengeId} />
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.confirmWrapper}>
                        <ConfirmBoard props={confirms} id={challengeId} />
                    </div>
                    <div className={styles.chattingWrapper}>
                        <ChattingBoard props={challenge} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupBoard;