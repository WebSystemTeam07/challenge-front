import React,{useState} from 'react';
import './styles/Tab.css';
import PersonalChallenge from './PersonalChallenge';
import GroupChallenge from './GroupChallenge';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '그룹챌린지', content: 'Tab menu ONE' },
    { name: '개인챌린지', content: 'Tab menu TWO' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <div className="tabMenu">
          {menuArr.map((ele, index)=>{
            return (
              <div
              key={index}
              className={currentTab === index ? "submenu focused" : "submenu"}
              onClick={()=> selectMenuHandler(index)}
            >
              {ele.name}
              {console.log(currentTab)}
            </div>
              )
          })}
        </div>
      </div>
      {currentTab===0? <GroupChallenge/> : <PersonalChallenge/>}
    </>
  );
};

export default Tab;

