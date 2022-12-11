import styles from "./styles/confirm.module.scss"
import ArticleButton from "../atoms/ArticleButton";

import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom"

function ConfirmBoard({props, id}) {

    const List = props.slice(0, 9);

    if (props) {
        return(
            <div className={styles.confirmContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.titleContainer}>
                        <ChatIcon style={{ fill: '#1c8cc9' }} />
                        <p>인증 게시판</p>
                    </div>
                    <Link to={{
                        pathname: `/groupchallengepage/board/detail/${id}`,
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
                <div className={styles.articleContainer}>
                    {List.map((article) => (
                        <ArticleButton
                            props={article}
                        />
                    ))} 
                </div>
            </div>
        );
    } else return null;
}

export default ConfirmBoard;