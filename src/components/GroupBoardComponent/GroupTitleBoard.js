import styles from "./styles/group.module.scss"

import FaceIcon from '@mui/icons-material/Face';

function GroupTitleBoard({challenge, user}) {

    const tags = challenge.tag;

    return(
        <div className={styles.boardContainer}>
            <div className={styles.bodyContainer}>
                <div className={styles.tagContainer}>
                    {tags.map((tag) => (
                        <p>#{tag}</p>
                    ))}
                </div>
                <div className={styles.titleContainer}>
                    <p>{challenge.title}</p>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileBox}>
                        <img className={styles.profileImage} src={user.imgSrc} alt="profile"></img>
                    </div>
                    <p>{user.name}</p>
                    <p>·</p>
                    <div className={styles.peopleContainer}>
                        <FaceIcon fontSize="small" />
                        <p>{challenge.people} 명 참여중</p>
                    </div>
                </div>
                <button>챌린지 소개</button>
            </div>
        </div>
    );
}

export default GroupTitleBoard;