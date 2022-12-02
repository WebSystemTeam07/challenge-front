import { useState } from "react";

import styles from "../components/styles/question.module.scss"

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Question({question, answer}) {

    const [open, setOpen] = useState(0);

    const toggleAnswer = () => {
        setOpen(open => !open);
    }

    return(
        <div className={styles.bodyContainer} onClick={toggleAnswer}>
            <div className={styles.questionContainer} >
                <div className={styles.infoContainer} >
                    <QuestionMarkIcon />
                    <p>{question}</p>
                </div>
                { open ? <ArrowDropUpIcon fontSize="small" /> : <ArrowDropDownIcon fontSize="small" />}
            </div>
            { open ? (
                <div className={styles.answerContainer}>
                    <AnnouncementIcon />
                    <p>{answer}</p>
                </div>
            ) : ("")}
        </div>
    );
}

export default Question;