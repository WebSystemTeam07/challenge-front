import styles from "./styles/record.module.scss"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RecordButton from "../atoms/RecordButton";

function RecordBoard({props}) {

    if (props) {

        console.log(props)

        const MemberArray = []

        for (let i = 0; i < props.length; i++) {
            const member = props[i];
            const status = member.status;
            const tmp = status.filter(status => 't' === status).length;
            MemberArray.push({user: member, count: tmp});
        }

        let sorting = "count";

        MemberArray.sort(function(a, b) {
            return b[sorting] - a[sorting];
        });

        const List = MemberArray.slice(0, 8);

        return(
            <div className={styles.recordContainer}>
                <div className={styles.bodyContainer}>
                    <div className={styles.titleContainer}>
                        <AccessTimeIcon style={{ fill: '#1c8cc9' }} />
                        <p>실시간 기록</p>
                    </div>
                    <div className={styles.listContainer}>
                        {List.map((member, index) => (
                            <div className={styles.listWrapper}>
                                <RecordButton
                                    rank={index + 1}
                                    user={member}
                                />
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        );
    } else return null;
}

export default RecordBoard;