import styles from "./styles/rate.module.scss"
import DonutChart from "../atoms/DonutChart";

function SuccessRateBoard({challenge, users}) {

    const btMs = challenge.now.getTime() - challenge.startDate.getTime();
    const btDay = btMs / (1000 * 60 * 60 * 24);

    return(
        <div className={styles.rateContainer}>
            <p><span>{btDay + 1}</span> 일 째 도전 중!</p>
            <DonutChart 
                color="#1c8cc9"
                percent={0.7}
                size="13rem"
            />
        </div>
    );
}

export default SuccessRateBoard;