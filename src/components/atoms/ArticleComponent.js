import { Link, useNavigate } from "react-router-dom";
import styles from "./article.module.scss"

function ArticleComponent({props, index, id}) {
    const navigate = useNavigate();

    const date = new Date(props.date)

    console.log(id);

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const day = date.getDate();

    const dayOfWeek = week[date.getDay()];

    const onClickHandler = () => {
        navigate("/groupchallengepage/board/detail/article", { state: { articleId :id } })
    }

    return(
        <div className={styles.articleContainer} onClick={onClickHandler}>
            <div className={styles.keyWrapper}>
                <p>{index}</p>
            </div>
            <div className={styles.titleWrapper}>
                <p>{props.title}</p>
            </div>
            <div className={styles.nameWrapper}>
                <p>{props.user}</p>
            </div>
            <div className={styles.dateWrapper}>
                <div className={styles.dateContainer}>
                    { month < 10 ? 
                        ( day < 10 ? <p>{year}-0{month}-0{day}</p> : <p>{year}-0{month}-{day}</p>) : 
                        (day < 10 ? <p>{year}-{month}-0{day}</p> : <p>{year}-{month}-{day}</p>)}
                    <p>({dayOfWeek})</p>
                </div>
            </div>
        </div>
    );
}

export default ArticleComponent;