import Header from "../components/Header.js"
import Footer from '../components/Footer.js'
import Navigator from '../components/Navigator.js'
import ChallengeBoard from "../components/ChallengeBoard.js";
import RecommandBoard from "../components/RecommandBoard.js";
import HallBoard from "../components/HallBoard.js";

import styles from "../pages/styles/main.module.scss"

import { useEffect, useState } from "react";

function Main() {

    const [title, setTitle] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {

        let typing = "포 마이 라이프"
        let speed = "300";
        
        const interval = setInterval(() => {
            setTitle((text) => {
                let result = text ? text + typing[count] : typing[0];
                setCount(count + 1);
                return result;
            });
        }, speed);

        if (count === typing.length) {
            return clearInterval(interval);
        } else {
            return () => clearInterval(interval);
        }

    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainWrapper}>
                <div className={styles.imageContainer}>
                    <img className={styles.mainImage} src={process.env.PUBLIC_URL + '/main3.jpg'} alt="default"></img>
                </div>
                <div className={styles.textContainer}>
                    <p>
                        <span>당신의 인생을 위해</span>
                        <span>{title}</span>
                    </p>
                </div>
            </div>
            <ChallengeBoard />
            <RecommandBoard />
            <HallBoard />
        </div>
    );
}

export default Main;