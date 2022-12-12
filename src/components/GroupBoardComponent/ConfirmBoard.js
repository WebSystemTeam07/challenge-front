import styles from "./styles/confirm.module.scss"
import ArticleButton from "../atoms/ArticleButton";

import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';

import { Link, useNavigate } from "react-router-dom"

function ConfirmBoard({props, id}) {

    const navigate = useNavigate();

    function flattenProps(arr, d = 1) {
        return ( d > 0 
            ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenProps(val, d - 1) : val), [])
            : arr.slice());
    };

    const newList = flattenProps(props, Infinity);
    const List = newList.slice(0, 9);

    const onclickHandler = () => {
        navigate("/groupchallengepage/board/detail", { state: { challengeId :id } })
    }

    if (props) {
        return(
            <div className={styles.confirmContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.titleContainer}>
                        <ChatIcon style={{ fill: '#1c8cc9' }} />
                        <p>인증 게시판</p>
                    </div>
                    <div className={styles.plusContainer} onClick={onclickHandler}>
                        <AddIcon className={styles.iconContainer} />
                        <p>더 보기</p>
                    </div>
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