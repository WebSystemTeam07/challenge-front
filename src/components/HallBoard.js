import styles from "../components/hall.module.scss"

function HallBoard() {
    return (
        <div className={styles.boardContainer}>
            <div className={styles.titleContainer}>
                <p>명예의 전당</p>
                <div className={styles.arrayContainer}>
                    <p>2022년 11월 8일 오전 9시 00분 기준</p>
                </div>  
            </div>
        </div>
    );
}

export default HallBoard;