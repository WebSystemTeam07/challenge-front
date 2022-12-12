import Bar from '../components/Bar.js';
import GroupTitleBoard from '../components/GroupBoardComponent/GroupTitleBoard.js';

import styles from "./styles/article.module.scss"

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import port from "../assets/port.json";

function GroupBoardTaskArticle(props) {

    const navigate = useNavigate();
    const location = useLocation();

    const usertaskId = location.state.usertaskId;
    const challengeId = location.state.challengeId;
    const newDate = location.state.date;
    

    const [article, setArticle] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {

        axios.get(port.url + `/task/userbyiddate`, { params: { usertaskId: usertaskId, date: newDate }}).then((response) => {
            console.log("Successfully Connected")
            setArticle(response.data);
        }).catch(() => {
                console.log("Error")
        });

        // axios.get(port.url + `/user/userId/${userId}`).then((response) => {
        //     console.log("Successfully Connected")
        //     setUser(response.data);
        // }).catch(() => {
        //     console.log("Error")
        // });

    }, []);

    const date = new Date(article.date)
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const day = date.getDate();

    const dayOfWeek = week[date.getDay()];

    const onClickHandler = () => {
        navigate("/groupchallengepage/board/detail/", { state: { challengeId : challengeId } })
    }

    return(
        <div>
            <Bar path={"전체보기 > 그룹 챌린지 > 상세 > 그룹 게시판 > "} content={"공지사항"}/>
            <div className={styles.boardContainer}>
                <div className={styles.componentContainer}>
                    <div className={styles.backWrapper} onClick={onClickHandler}><p>돌아가기</p></div>
                    <div className={styles.articleContainer}> 
                        <div className={styles.titleContainer}>
                            <div className={styles.dateContainer}>
                            { month < 10 ? 
                                ( day < 10 ? <p>{year}-0{month}-0{day}</p> : <p>{year}-0{month}-{day}</p>) : 
                                (day < 10 ? <p>{year}-{month}-0{day}</p> : <p>{year}-{month}-{day}</p>)
                            }
                                <p>({dayOfWeek})</p>
                            </div>
                            <div className={styles.headerContainer}>
                                <p>{article.title}</p>
                                {/* <p>{user.name}</p> */}
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            <p>{article.contents}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GroupBoardTaskArticle;