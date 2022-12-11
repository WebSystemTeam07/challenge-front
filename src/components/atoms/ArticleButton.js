import styles from "./atom.module.scss"

import { Link } from "react-router-dom"

function ArticleButton({props}) {
    return(
        <Link to="/groupchallengepage/board/detail/article" style={{ textDecoration: "none" }}>
            <div className={styles.articleContainer}>
                <p>{props.title}</p>
                <div className={styles.infoContainer}>
                    <p>{props.user}</p>
                    <div className={styles.dateContainer}>
                        <p>{props.date}</p>
                        <p>({props.day})</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleButton;