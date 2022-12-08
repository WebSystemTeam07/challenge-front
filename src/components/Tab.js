import React,{useState} from 'react';
import styles from './styles/tab.module.scss';
import PersonalChallenge from './PersonalChallenge';
import GroupChallenge from './GroupChallenge';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '그룹챌린지'},
    { name: '개인챌린지'},
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <div className={styles.tabMenu}>
          {menuArr.map((item, idx)=>{
            return (
                currentTab === idx ?  
                <div
                key={idx}
                className={styles.focused} 
                onClick={()=> selectMenuHandler(idx)}>
                {item.name}
              </div> 
              :  
              <div
              key={idx}
              className={styles.submenu}
              onClick={()=> selectMenuHandler(idx)}>
              {item.name}
            </div>
              );
          })}
        </div>
      </div>
      {currentTab===0? <> <h2 className={styles.challenge_title}>참여 중인 챌린지</h2><GroupChallenge/></>:<><h2 className={styles.challenge_title}>참여 중인 챌린지</h2><PersonalChallenge/></>}
    </>
  );
};

export default Tab;

