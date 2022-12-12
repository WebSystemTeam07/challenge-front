import styles from "./styles/rate.module.scss"
import DonutChart from "../atoms/DonutChart";

function SuccessRateBoard({challenge, users}) {

    if (challenge && users) {

        const MemberArray = []
        const count = 0;

        for (let i = 0; i < users.length; i++) {
            const member = users[i];
            const status = member.status;
            const tmp = status.filter(status => 't' === status).length;
            const percent = tmp / status.length;
            count = count + percent;
        }

        const finalPercent = count / challenge.userIds.length;

        const now = new Date()
        const start = new Date(challenge.startDate)

        const btMs = now.getTime() - start.getTime();
        const btDay = parseInt(btMs / (1000 * 60 * 60 * 24));

        return(
            <div className={styles.rateContainer}>
                <p className={styles.titleContainer}><span>{btDay + 1}</span> 일 째 도전 중!</p>
                { finalPercent > 0 ? <DonutChart 
                    color="#1c8cc9"
                    percent={finalPercent}
                    size="13rem"
                    font="large"
                /> : <DonutChart 
                    color="#1c8cc9"
                    percent={0.1}
                    size="13rem"
                    font="large"
                />}
            </div>
        );
    } else return null;
}

export default SuccessRateBoard;