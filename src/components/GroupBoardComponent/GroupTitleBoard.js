import { useState, useEffect } from "react";
import GroupChallengeModal from "../atoms/GroupChallengeModal";
import styles from "./styles/group.module.scss"

import FaceIcon from '@mui/icons-material/Face';

import axios from "axios";
import port from "../../assets/port.json";

function GroupTitleBoard({challenge, user}) {
    const [open, setOpen] = useState(0);
    // const [user, setUser] = useState("");

    const openModal = () => {
        setOpen(1);
    }

    const closeModal = () => {
        setOpen(0);
    }

    console.log(challenge);

    const title = challenge.title;

    return(
        <div className={styles.boardContainer}>
            <div className={styles.bodyContainer}>
                <div className={styles.tagContainer}>
                    {/* {tags.map((tag) => (
                        <p>#{tag}</p>
                    ))} */}
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
                        <p>{challenge.member} 명 참여중</p>
                    </div>
                </div>
                <div>
                    <button className={styles.onButton} onClick={openModal}>챌린지 소개</button>
                    <GroupChallengeModal open={open} close={closeModal} challenge={challenge} />
                </div>
            </div>
        </div>
    );
}

export default GroupTitleBoard;