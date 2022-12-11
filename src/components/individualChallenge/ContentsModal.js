import { listClasses } from "@mui/material";
import "../individualChallenge/individualModal.scss"

function ContentsModal({setModal, taskList}){
    function closeModal(){
        setModal(false)
    }
    return(
        <div className="individualModalContainer">
            <button className="individualCloseBtn" onClick={closeModal}>x</button>
            <div className="contnetGrid">
                {
                    taskList.map((item)=>(<div className="modalItem">{item}</div>))
                }
            </div>
        </div>
    )
}

export default ContentsModal;