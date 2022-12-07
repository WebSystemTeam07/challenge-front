import styles from "./styles/notice.module.scss"
import ArticleButton from "../atoms/ArticleButton";

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom"

function NoticeBoard({props}) {

    const List = props.slice(0, 6);

    return(
        <div className={styles.noticeContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.titleContainer}>
                    <NotificationsActiveIcon />
                    <p>공지사항</p>
                </div>
                <Link to={{
                    pathname: "/groupchallengepage/board/detail",
                    state: {
                        noticeState: 1,
                        authState: 0
                    },
                }} style={{ textDecoration: "none" }}>
                    <div className={styles.plusContainer}>
                        <AddIcon className={styles.iconContainer} />
                        <p>더 보기</p>
                    </div>
                </Link>
            </div>
            <div>
                {List.map((article) => (
                    <ArticleButton
                        props={article}
                    />
                ))} 
            </div>
        </div>
    );
}

export default NoticeBoard;