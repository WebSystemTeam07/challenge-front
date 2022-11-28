import Recommand from "../components/Recommand.js";
import RecommandList from "../data/RecommandList.js";

import styles from "../components/recommand.module.scss"

function RecommandBoard() {
    return (
        <div className={styles.boardContainer}>
            <div className={styles.textContainer}>
                <p>어떻게 챌린지를 시작할 지 모르겠다면?</p>
                <p><span>오늘의 추천 챌린지</span>를 만나보세요!</p>
            </div>
            <div className={styles.contentContainer}>
                {RecommandList.map(({ title, url, content, imgSrc }) => (
                    <Recommand
                        title={title}
                        surveyUrl={url}
                        content={content}
                        imgSrc={imgSrc}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecommandBoard;