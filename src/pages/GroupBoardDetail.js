import Header from '../components/Header.js';
import Navigator from '../components/Navigator.js';
import Bar from '../components/Bar.js';
import Footer from '../components/Footer.js';
import GroupTitleBoard from '../components/GroupBoardComponent/GroupTitleBoard.js';

import LetterBoard from '../components/LetterBoard.js';
import NoticeList from '../data/NoticeList.js';
import ConfirmList from '../data/ConfirmList.js';

import styles from './styles/detail.module.scss'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"

import axios from 'axios';
import port from "../assets/port.json";

function GroupBoardDetail() {

    const [notice, setNotice] = useState(1);
    const [auth, setAuth] = useState(0);

    const [challenge, setChallenge] = useState("");
    const [notices, setNotices] = useState([]);
    const [confirms, setConfirms] = useState([]);

    const location = useLocation();
    const challengeId = location.state.challengeId;

    const noticeHandler = (e) => {
        setNotice(1);
        setAuth(0);
    }

    const authHandler = (e) => {
        setNotice(0);
        setAuth(1);
    }

    useEffect(() => {

        axios.get(port.url + `/challenge/specific/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setChallenge(response.data);
        }).catch(() => {
            console.log("Error")
        });


        axios.get(port.url + `/post/challenge/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setNotices(response.data);
        }).catch(() => {
            console.log("Error")
        })

        axios.get(port.url + `/task/challenge/list/${challengeId}`).then((response) => {
            console.log("Successfully Connected")
            setConfirms(response.data);
            console.log(confirms);
        }).catch(() => {
            console.log("Error")
        })

    }, []);


    return(
        <div>
            { notice ? <Bar path={"전체보기 > 그룹 챌린지 > 상세 > 그룹 게시판 > "} content={"공지사항"}/> : <Bar path={"전체보기 > 그룹 챌린지 > 상세 > 그룹 게시판 > "} content={"인증 게시판"}/>}
            <div className={styles.boardContainer}>
                <div className={styles.bodyContainer}>
                    <div className={styles.navigatorContainer}>
                        <div onClick={noticeHandler}>
                            {notice ? <p className={styles.clicked}>공지사항</p> : <p>공지사항</p>}
                        </div>
                        <div onClick={authHandler}>
                            {auth ? <p className={styles.clicked}>인증 게시판</p> : <p>인증 게시판</p>}
                        </div>
                    </div>
                    <div className={styles.letterContainer}>
                        { notice ? (
                            <LetterBoard 
                                title={"공지사항"} 
                                list={ notices }
                                id = {challengeId}
                                type = { notice }
                            />
                        ) : (
                            <LetterBoard 
                                title={"인증 게시판"} 
                                list={ confirms }
                                id = {challengeId}
                                type = { notice }
                            />
                        )}
                    {
                        notice ? (
                            <Link to="/groupchallengepage/board/detail/inforegister" state={{challenge:challenge}} style={{ textDecoration: "none" }}>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.writeButton}>
                                        글쓰기
                                    </button>
                                </div>
                            </Link>) : (
                            <Link to="/groupchallengepage/board/detail/certifiregister" state={{challenge:challenge}} style={{ textDecoration: "none" }}>
                            <div className={styles.buttonContainer}>
                                <button className={styles.writeButton}>
                                    글쓰기
                                </button>
                            </div>
                            </Link>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupBoardDetail;