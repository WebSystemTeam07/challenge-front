import styles from "./styles/notice.module.scss"
import ArticleButton from "../atoms/ArticleButton";

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddIcon from '@mui/icons-material/Add';

import { Link, useNavigate } from "react-router-dom"

function NoticeBoard({props, id}) {

    const List = props.slice(0, 6);
    const navigate = useNavigate();

    const onclickHandler = () => {
        navigate("/groupchallengepage/board/detail", { state: { challengeId :id } })
    }

    if (props) {
        return(
            <div className={styles.noticeContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.titleContainer}>
                        <NotificationsActiveIcon style={{ fill: '#1c8cc9' }} />
                        <p>공지사항</p>
                    </div>
                        <div className={styles.plusContainer} onClick={onclickHandler}>
                            <AddIcon className={styles.iconContainer} />
                            <p>더 보기</p>
                        </div>
                </div>
                { List.length === 0
                ? 
                    <div>
                        <p>글이 없습니다.</p>
                    </div>
                : 
                    <div>
                        {List.map((article) => (
                            <ArticleButton
                                props={article}
                            />
                        ))} 
                    </div>
                }
            </div>
        );
    } else return null;
}

export default NoticeBoard;