import Header from "../components/Header.js"
import Footer from '../components/Footer.js'
import Navigator from "../components/Navigator.js";
import Bar from "../components/Bar.js";
import Title from "../components/Title.js";

import QuestionList from "../data/QuestionList.js";
import Question from "../components/Question.js";

import styles from "../pages/styles/introduce.module.scss"

function Introduce() {
    return(
        <>
        <Bar path={"전체보기 > "} content={"서비스 소개"} />
        <Title title="서비스 소개" />
        <div className={styles.boardContainer}>
            {QuestionList.map(({ question, answer }) => (
                <Question
                    question={question}
                    answer={answer}
                />
            ))}
        </div>
        </>
    );
}

export default Introduce;
