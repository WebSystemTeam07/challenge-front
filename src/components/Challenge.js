import { Link } from "react-router-dom"
import "../components/challenge.module.scss"

import styles from "../components/challenge.module.scss"

function Challenge({title, tag, url, imgSrc}) {
    return(
        <Link to={url} style={{ textDecoration: "none" }}>
            <div className={styles.bodyContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.logoImage} src={imgSrc} alt="default"></img>
                </div>
                <div className={styles.tagContainer}>
                    <span className={styles.challengeTag}>{tag}</span>
                </div>
                <p className={styles.challengeName}>{title}</p>
            </div>
        </Link>
        
    );
}

export default Challenge;