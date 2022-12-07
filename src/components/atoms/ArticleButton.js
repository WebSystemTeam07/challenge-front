import styles from "./atom.module.scss"

function ArticleButton({props}) {
    return(
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
    );
}

export default ArticleButton;