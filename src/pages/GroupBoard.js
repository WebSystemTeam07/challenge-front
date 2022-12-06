import Header from '../components/Header.js';
import Navigator from '../components/Navigator.js'
import Bar from '../components/Bar.js';
import Footer from '../components/Footer.js'

import MemberList from '../data/MemberList.js';
import ConfirmList from '../data/ConfirmList.js';
import NoticeList from '../data/NoticeList.js';

import NoticeBoard from '../components/GroupBoardComponent/NoticeBoard.js';
import ConfirmBoard from '../components/GroupBoardComponent/ConfirmBoard.js';
import GroupTitleBoard from '../components/GroupBoardComponent/GroupTitleBoard.js';
import RecordBoard from '../components/GroupBoardComponent/RecordBoard.js';
import SuccessRateBoard from '../components/GroupBoardComponent/SuccessRateBoard.js';
import ChattingBoard from '../components/GroupBoardComponent/ChattingBoard.js';

import styles from '../pages/styles/board.module.scss'

function GroupBoard() {
    
    const challenge = {
        title: "하루 한 번 샐러드 먹기",
        tag: ["매일", "식단"],
        people: 1028,
        now: new Date('2022-12-02'),
        startDate: new Date('2022-11-30'),
        endDate: new Date('2022-12-07'),
    }

    const user = {
        name: "큐티섹시회오리소세지",
        imgSrc: "https://blog.kakaocdn.net/dn/bzKsjn/btq3USZ2HWX/FVn5G8ZMU3avYbgmapPRDK/img.jpg"
    }

    return (
        <div className={styles.bodyContainer}>
            <Header />
            <Navigator />
            <Bar path={"전체보기 > 그룹 챌린지 > 상세 > "} content={"그룹 게시판"} />
            <div className={styles.boardContainer}>
                <GroupTitleBoard 
                    challenge={challenge}
                    user={user}
                />
                <div className={styles.firstContainer}>
                    <div className={styles.successWrapper}>
                        <SuccessRateBoard 
                            challenge={challenge}
                            users={MemberList}
                        />
                    </div>
                    <div className={styles.recordWrapper}>
                        <RecordBoard props={MemberList} />
                    </div>               
                </div>
                <div>
                    <NoticeBoard props={NoticeList} />
                </div>
                <div className={styles.secondContainer}>
                    <div className={styles.confirmWrapper}>
                        <ConfirmBoard props={ConfirmList} />
                    </div>
                    <div className={styles.chattingWrapper}>
                        <ChattingBoard />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GroupBoard;