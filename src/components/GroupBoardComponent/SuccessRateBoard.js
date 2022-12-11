import styles from "./styles/rate.module.scss"
import DonutChart from "../atoms/DonutChart";

function SuccessRateBoard({challenge, users}) {

    if (challenge && users) {

        const now = new Date()
        const start = new Date(challenge.startDate)

        const btMs = now.getTime() - start.getTime();
        const btDay = parseInt(btMs / (1000 * 60 * 60 * 24));

        return(
            <div className={styles.rateContainer}>
                <p className={styles.titleContainer}><span>{btDay + 1}</span> 일 째 도전 중!</p>
                <DonutChart 
                    color="#1c8cc9"
                    percent={0.7}
                    size="13rem"
                    font="large"
                />
            </div>
        );
    } else return null;
}

export default SuccessRateBoard;