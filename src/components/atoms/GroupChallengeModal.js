import styles from "./modal.module.scss"

const GroupChallengeModal = (props) => {

    const { open, close, header } = props;

    return(
        <div>
            { open ? (
                <div className={styles.modalContainer}>
                    {header}
                </div>
            ) : null}
        </div>
    );
}

export default GroupChallengeModal;