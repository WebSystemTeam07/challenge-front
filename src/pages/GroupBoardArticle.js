import Bar from '../components/Bar.js';
import GroupTitleBoard from '../components/GroupBoardComponent/GroupTitleBoard.js';

import styles from "./styles/article.module.scss"

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import port from "../assets/port.json";

function GroupBoardArticle(props) {

    const location = useLocation();
    const articleId = location.state.articleId;

    // const [article, setArticle] = useState("");

    // const challenge = {
    //     title: "하루 한 번 샐러드 먹기",
    //     tag: ["매일", "식단"],
    //     people: 1028,
    //     now: new Date('2022-12-02'),
    //     startDate: new Date('2022-11-30'),
    //     endDate: new Date('2022-12-07'),
    // }

    // const user = {
    //     name: "큐티섹시회오리소세지",
    //     imgSrc: "https://blog.kakaocdn.net/dn/bzKsjn/btq3USZ2HWX/FVn5G8ZMU3avYbgmapPRDK/img.jpg"
    // }

    const article = {
        title: "공지사항",
        date: "2022-12-01",
        day: "목",
        content: "공지사항입니다.",
        user: "관리자"
    }

    // useEffect(() => {

    //     axios.get(port.url + `/post/challenge/${articleId}`).then((response) => {
    //         console.log("Successfully Connected")
    //         setArticle(response.data);
    //     }).catch(() => {
    //         console.log("Error")
    //     })

    // }, []);


    return(
        <div>
            <Bar path={"전체보기 > 그룹 챌린지 > 상세 > 그룹 게시판 > "} content={"공지사항"}/>
            <div className={styles.boardContainer}>
                <div className={styles.componentContainer}>
                    {/* <Link to="/groupchallengepage/board/detail" style={{ textDecoration: "none" }}>
                        <div className={styles.backWrapper}><p>돌아가기</p></div>
                    </Link> */}
                    <div className={styles.articleContainer}> 
                        <div className={styles.titleContainer}>
                            <div className={styles.dateContainer}>
                                <p>{article.date}</p>
                                <p>({article.day})</p>
                            </div>
                            <div className={styles.headerContainer}>
                                <p>{article.title}</p>
                                <p>{article.user}</p>
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            <p>{article.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupBoardArticle;