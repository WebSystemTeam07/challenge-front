import Header from '../components/Header.js';
import Navigator from '../components/Navigator.js';
import Bar from '../components/Bar.js';
import Footer from '../components/Footer.js';
import GroupTitleBoard from '../components/GroupBoardComponent/GroupTitleBoard.js';

import LetterBoard from '../components/LetterBoard.js';
import NoticeList from '../data/NoticeList.js';
import ConfirmList from '../data/ConfirmList.js';

import styles from './styles/detail.module.scss'
import { useState } from 'react';

function GroupBoardDetail() {

    const [notice, setNotice] = useState(1);
    const [auth, setAuth] = useState(0);

    const challenge = {
        title: "하루 한 번 샐러드 먹기",
        tag: ["매일", "식단"],
        people: 1028,
        now: new Date('2022-12-02'),
        startDate: new Date('2022-11-30'),
        endDate: new Date('2022-12-07'),
    }

    const user = {
        name: "큐티섹시회오리소세지",
        imgSrc: "https://blog.kakaocdn.net/dn/bzKsjn/btq3USZ2HWX/FVn5G8ZMU3avYbgmapPRDK/img.jpg"
    }

    const noticeHandler = (e) => {
        setNotice(1);
        setAuth(0);
    }

    const authHandler = (e) => {
        setNotice(0);
        setAuth(1);
    }

    return(
        <div>
            <Bar path={"전체보기 > 그룹 챌린지 > 상세 > 그룹 게시판 > "} content={"공지사항"}/>
            <div className={styles.boardContainer}>
                <GroupTitleBoard 
                    challenge={challenge}
                    user={user}
                />
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
                                list={NoticeList}
                            />
                        ) : (
                            <LetterBoard 
                                title={"인증 게시판"} 
                                list={ConfirmList}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupBoardDetail;