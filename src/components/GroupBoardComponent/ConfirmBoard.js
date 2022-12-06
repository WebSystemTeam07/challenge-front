import styles from "./styles/confirm.module.scss"
import ArticleButton from "../atoms/ArticleButton";

import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';

function ConfirmBoard({props}) {

    const List = props.slice(0, 10);

    return(
        <div className={styles.confirmContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.titleContainer}>
                    <ChatIcon />
                    <p>인증 게시판</p>
                </div>
                <div className={styles.plusContainer}>
                    <AddIcon className={styles.iconContainer} />
                    <p>더 보기</p>
                </div>
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

export default ConfirmBoard;