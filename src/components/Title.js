import styles from "../components/styles/component.module.scss"

function Title({title}) {
    return(
        <div className={styles.titleContainer}>
            <p>{title}</p>
        </div>
    );
}

export default Title;