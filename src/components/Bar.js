import styles from "../components/component.module.scss"

function Bar({path, content}) {
    return(
        <div className={styles.barContainer}>
            <p>{path}<span>{content}</span></p>
        </div>
    );
}

export default Bar;