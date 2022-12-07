import { useState } from "react";
import { Link } from "react-router-dom"

import styles from "../components/styles/recommand.module.scss"

function Recommand({title, url, content, imgSrc}) {

    const [hover, setHover] = useState(0);

    return (
        <Link to={url} style={{ textDecoration: "none" }}>
            <div className={styles.bodyContainer} onMouseOver={() => setHover(1)} onMouseOut={() => setHover(0)}>
                <div className={styles.imageContainer}>
                    <img className={styles.logoImage} src={imgSrc} alt="default"></img>
                </div>
                {hover ? (
                    <div className={styles.titleContainer}>
                        <p>{title}</p>
                        <p className={styles.moreText}>{content}</p>
                        <p className={styles.moreText}>더 보러 가기</p>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </Link>
    );
}

export default Recommand;