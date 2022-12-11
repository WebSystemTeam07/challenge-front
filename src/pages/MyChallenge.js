import ChallengeList from "../components/myChallenge/ChallengeList";
import Navigator from '../components/Navigator';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Bar from "../components/Bar";
import styles from "./styles/mypage.module.scss"

const myChallenge=()=>{
  return(
    <div>
      <Bar path={"전체보기 > "} content={"나의 챌린지"}/>
      <div className={styles.pageContainer}>
        <ChallengeList/>
      </div>
    </div>
  );
}

export default myChallenge;