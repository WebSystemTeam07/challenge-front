import Challenge from "../components/Challenge.js"
import ContentList from "../data/ContentList.js";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from "react-router-dom"

import styles from "../components/challenge.module.scss"

function ChallengeBoard() {
    return(
        <div className={styles.boardContainer}>
            <div className={styles.titleContainer}>
                <p>현재 진행중인 챌린지</p>
                <div className={styles.arrayContainer}>
                    <p>인기 순</p>
                    <ExpandMoreIcon fontSize="small"></ExpandMoreIcon> 
                </div>  
            </div>
            <div className={styles.challengeWrapper}>
                <div className={styles.challengeContainer}>
                    {ContentList.map(({ title, tag, url, imgSrc }) => (
                        <Challenge
                            title={title}
                            tag={tag}
                            surveyUrl={url}
                            imgSrc={imgSrc}
                        />
                    ))}
                </div>
                <Link to="" style={{ textDecoration: "none" }}>
                    <div className={styles.moreButton}><p>더 보러 가기</p></div>
                </Link>
            </div>
        </div>
    );
}

export default ChallengeBoard;