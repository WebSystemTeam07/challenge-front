import { useState } from "react";
import ArticleComponent from "./atoms/ArticleComponent";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from "./styles/letter.module.scss"

function NoticeLetterBoard({title, list}) {

    const [page, setPage] = useState(1);

    const incrementHandler = () => {
        if (list.length < (page + 1) * 13) {
            setPage(page);
        } else {
            setPage(page + 1);
        }
    }

    const decrementHandler = () => {
        if (page === 1) {
            setPage(1);
        } else {
            setPage(page - 1);
        }
    }

    const List = list.slice((page - 1) * 13, page * 13)

    return(
        <div>
            <p className={styles.titleContainer}>{title}</p>
            <div className={styles.headerContainer}>
                <div className={styles.keyWrapper}>
                    <p>번호</p>
                </div>
                <div className={styles.titleWrapper}>
                    <p>제목</p>
                </div>
                <div className={styles.nameWrapper}>
                    <p>작성자</p>
                </div>
                <div className={styles.dateWrapper}>
                    <p>작성일</p>
                </div>
            </div>
            <div>
                {List.map((article, index) => (
                    <ArticleComponent
                        props={article}
                        index={index + 1}
                    />
                ))}
            </div>
            <div className={styles.arrowContainer}>
                <div className={styles.decrementWrapper} onClick={decrementHandler}>
                    <ArrowBackIosNewIcon />
                </div>
                <div className={styles.numberWrapper}>
                    <p>{page}</p>
                </div>
                <div className={styles.incrementWrapper} onClick={incrementHandler}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
}

export default NoticeLetterBoard;