import { listClasses } from "@mui/material";
import "../individualChallenge/individualModal.scss"

function ContentsModal({setModal, taskList, title}){
    let day = 1;
    function closeModal(){
        setModal(false)
    }
    return(
        <div className="individualModalContainer">
            <div className="inidividualModalTitle">{title}</div>
            <button className="individualCloseBtn" onClick={closeModal}>x</button>
            <div className="contnetGrid">
                {
                    taskList.map((item)=>(
                    <>
                        <span className="taskItem">
                            <div className="taskDay">{day++}일차</div>
                            {item}
                        </span>
                    </>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentsModal;