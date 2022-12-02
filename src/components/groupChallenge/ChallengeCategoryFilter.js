import ChallengeBoardItem from "./ChallengeBoardItem";

function ChallengeCategoryFilter(props){
    
    if(props.category == "전체") {
        return(
            props.challengeData.map((item)=>(
                <ChallengeBoardItem challenge={item}/>
            ))
        )
    }
    else {
        return(
            props.challengeData.filter((item)=> item.category == props.category).map((item)=>(
                <ChallengeBoardItem challenge={item}/>
            ))
        )
    }
    
}

export default ChallengeCategoryFilter;