import styles from "./styles/record.module.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RecordButton from "../atoms/RecordButton";

function RecordBoard({props}) {

    const List = props.slice(0, 8);

    return(
        <div className={styles.recordContainer}>
            <div className={styles.bodyContainer}>
                <div className={styles.titleContainer}>
                    <AccessTimeIcon />
                    <p>실시간 기록</p>
                </div>
                <div className={styles.listContainer}>
                    {List.map((user, index) => (
                        <div className={styles.listWrapper}>
                            <RecordButton
                                rank={index + 1}
                                user={user}
                            />
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
}

export default RecordBoard;