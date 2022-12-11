import styles from "./atom.module.scss"

import { Link } from "react-router-dom"

function ArticleButton({props}) {

    const date = new Date(props.date)

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const day = date.getDate();

    const dayOfWeek = week[date.getDay()];

    return(
        <Link to="/groupchallengepage/board/detail/article" style={{ textDecoration: "none" }}>
            <div className={styles.articleContainer}>
                <p>{props.title}</p>
                <div className={styles.infoContainer}>
                    {/* <p>{props.user}</p> */}
                    <div className={styles.dateContainer}>
                        { month < 10 ? 
                            ( day < 10 ? <p>{year}-0{month}-0{day}</p> : <p>{year}-0{month}-{day}</p>) : 
                            (day < 10 ? <p>{year}-{month}-0{day}</p> : <p>{year}-{month}-{day}</p>)}
                        <p>({dayOfWeek})</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ArticleButton;