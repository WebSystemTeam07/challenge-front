import IndividualChallengeBoardItem from "./IndividualChallengeBoardItem";

function IndividualChallengeCategoryFilter(props){
    
    if(props.category == "전체") {
        return(
            props.challengeData.map((item)=>(
                <IndividualChallengeBoardItem challenge={item}/>
            ))
        )
    }
    else {
        return(
            props.challengeData.filter((item)=> item.category == props.category).map((item)=>(
                <IndividualChallengeBoardItem challenge={item}/>
            ))
        )
    }
    
}

export default IndividualChallengeCategoryFilter;