import styles from "./modal.module.scss"

const GroupChallengeModal = (props) => {

    const { open, close, header } = props;

    return(
        <div>
            { open ? (
                <div className={styles.modalContainer}>
                    {header}
                    <button onClick={close}>닫기</button>
                </div>
            ) : null}
        </div>
    );
}

export default GroupChallengeModal;