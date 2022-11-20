import styles from "../components/component.module.scss"

function Navigator() {
    return(
        <div className={styles.navigatorContainer}>
            <p>챌린지 소개</p>
            <p>그룹 챌린지</p>
            <p>개인 챌린지</p>
            <p>마이페이지</p>
        </div>
    );
}

export default Navigator;