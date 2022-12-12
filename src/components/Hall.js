import styles from "../components/styles/hall.module.scss"

function Hall({props}) {
    return(
        <div className={styles.hallContainer}>
            <div className={styles.nameContainer}>
                <div className={styles.profileBox}>
                    <img className={styles.profileImage} src={props.imgUrl} alt="profile"></img>
                </div>
                <p>{props.name}</p>
            </div>
            <div className={styles.pointContainer}>
                <p>{props.point} <span>point</span></p>
            </div>
        </div>
    );
}

export default Hall;