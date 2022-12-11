import styles from "../components/styles/hall.module.scss"

function Hall({props}) {
    return(
        <div className={styles.hallContainer}>
            <div>
                {/* <p>{props.imgSrc}</p> */}
                <p>{props.name}</p>
            </div>
            <div className={styles.pointContainer}>
                <p>{props.point} <span>point</span></p>
            </div>
        </div>
    );
}

export default Hall;