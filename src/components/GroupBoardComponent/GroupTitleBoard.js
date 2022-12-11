import { useState, useEffect } from "react";
import GroupChallengeModal from "../atoms/GroupChallengeModal";
import styles from "./styles/group.module.scss"

import FaceIcon from '@mui/icons-material/Face';

import axios from "axios";
import port from "../../assets/port.json";

function GroupTitleBoard({challenge}) {
    const [open, setOpen] = useState(0);
    const [user, setUser] = useState("");

    const openModal = () => {
        setOpen(1);
    }

    const closeModal = () => {
        setOpen(0);
    }

    useEffect(() => {

        if (challenge) {
                axios.get(port.url + `/user/userId/${challenge.ownerId}`).then((response) => {
                console.log("Successfully Connected")
                setUser(response.data);
            }).catch(() => {
                console.log("Error")
            });
        }

    }, []);

    const tags = challenge.tag;

    if (challenge && user) {
        console.log(user);
        
        return(
        <div className={styles.boardContainer}>
            <div className={styles.bodyContainer}>
                <div className={styles.tagContainer}>
                    {tags.map((tag) => (
                        <p>#{tag}</p>
                    ))}
                </div>
                <div className={styles.titleContainer}>
                    <p>{challenge?.title}</p>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.profileContainer}>
                    <div className={styles.profileBox}>
                        <img className={styles.profileImage} src={user.imgUrl} alt="profile"></img>
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
        )
    } else return null;
}

export default GroupTitleBoard;