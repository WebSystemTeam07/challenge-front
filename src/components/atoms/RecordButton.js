import styles from "../atoms/atom.module.scss"
import DonutChart from "./DonutChart";

function RecordButton({rank, user}) {

    const status = user.status;
    const count = status.filter(status => 't' === status).length;
    const percent = count / status.length;

    return(
        <div className={styles.recordContainer}>
            <div className={styles.infoContainer}>
                <div className={styles.rankContainer}>
                    <p>{rank}</p>
                </div>
                <div className={styles.profileBox}>
                    <img className={styles.profileImage} src={user.imgSrc} alt="profile"></img>
                </div>
                <p>{user.name}</p>
            </div>
            <div className={styles.chartWrapper}>
                <DonutChart 
                    color="#1c8cc9"
                    percent={percent}
                    size="45px"
                    font="0.1rem"
                />
            </div>
        </div>
    );
}

export default RecordButton;