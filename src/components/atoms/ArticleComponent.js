import styles from "./article.module.scss"

function ArticleComponent({props, index}) {
    return(
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
    );
}

export default ArticleComponent;