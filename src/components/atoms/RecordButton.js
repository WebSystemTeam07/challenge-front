import styles from "../atoms/atom.module.scss"
import DonutChart from "./DonutChart";

function RecordButton({rank, user}) {

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
                    percent={0.7}
                    size="45px"
                />
            </div>
        </div>
    );
}

export default RecordButton;