import styles from "./modal.module.scss"

const GroupChallengeModal = (props) => {

    const { open, close, challenge } = props;

    return(
        <div>
            { open ? (
                <div className={styles.modalContainer}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.titleContainer}>
                            <p>{challenge.title}</p>
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.articleContainer}>
                                <p>챌린지 소개</p>
                                <p>{challenge.contents}</p>
                            </div>
                            <div className={styles.articleContainer}>
                                <p>챌린지 방법</p>
                                <p>{challenge.method}</p>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button className={styles.closeButton} onClick={close}>닫기</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default GroupChallengeModal;