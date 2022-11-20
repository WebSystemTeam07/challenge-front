import Header from "../components/Header.js"
import Footer from '../components/Footer.js'
import Navigator from '../components/Navigator.js'
import ChallengeBoard from "../components/ChallengeBoard.js";
import RecommandBoard from "../components/RecommandBoard.js";
import HallBoard from "../components/HallBoard.js";

import styles from "../pages/main.module.scss"

function Main() {
    return (
        <div className={styles.mainContainer}>
            <Header loginUrl='./login' />
            <Navigator />
            <div className={styles.mainWrapper}>
                <div className={styles.imageContainer}>
                    <img className={styles.mainImage} src={process.env.PUBLIC_URL + '/main3.jpg'} alt="default"></img>
                </div>
                <div className={styles.textContainer}>
                    <p>
                        <span>당신을 위한 챌린지</span>
                        <span>모두의 챌린지</span>
                    </p>
                </div>
            </div>
            <ChallengeBoard />
            <RecommandBoard />
            <HallBoard />
            <Footer />
        </div>
    );
}

export default Main;