import { Link } from "react-router-dom";
import styles from "./article.module.scss"

function ArticleComponent({props, index}) {
    return(
        <Link to="/groupchallengepage/board/detail/article" style={{ textDecoration: "none" }}>
            <div className={styles.articleContainer}>
                <div className={styles.keyWrapper}>
                    <p>{index}</p>
                </div>
                <div className={styles.titleWrapper}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.nameWrapper}>
                    <p>{props.user}</p>
                </div>
                <div className={styles.dateWrapper}>
                    <div className={styles.dateContainer}>
                        <p>{props.date}</p>
                        <p>({props.day})</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleComponent;