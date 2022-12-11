import { Link } from "react-router-dom"

import styles from "../components/styles/challenge.module.scss"

function Challenge({props}) {

    const tag = props.tag.slice(0, 2);

    return(
        <Link to="/groupchallengepage/groupChallengeDetail" state={{challenge:props}} style={{ textDecoration: "none" }}>
            <div className={styles.bodyContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.logoImage} src={props.imageUrl} alt="default"></img>
                </div>
                <div className={styles.headerContainer}>
                    <div className={styles.tagContainer}>
                        {tag.map((tag) => (
                            <p className={styles.challengeTag}>{tag}</p>
                        ))}
                    </div>
                    <p className={styles.challengeName}>{props.title}</p>
                </div>
            </div>
        </Link>
        
    );
}

export default Challenge;