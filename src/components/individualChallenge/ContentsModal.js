import { listClasses } from "@mui/material";
import "./individualModal.scss"

function ContentsModal({setModal, contents30List, challengeTitle}){
    let day = 1;
    function closeModal(){
        setModal(false)
    }
    return(
        <div className="individualModalContainer">
            <div className="inidividualModalTitle">{challengeTitle}</div>
            <button className="individualCloseBtn" onClick={closeModal}>x</button>
            <div className="contnetGrid">
                {
                    contents30List.map((item)=>(
                    <>
                        <p className="taskItem">
                            <div className="taskDay">{day++}일차</div>
                            {item}
                        </p>
                    </>
                    ))
                }
            </div>
        </div>
    )
}

export default ContentsModal;