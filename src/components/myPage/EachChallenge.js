import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './../../scss/myPageTable.scss'

export default function EachChallenge(props) {
    const challenge = props.data
    const tags = challenge.tag
    const [percentage, setPercentage] = useState(0)

    /*challenge {
    id : String,
    ownerId : String,
    title : String,  //?곹솕蹂닿린梨뚮┛吏
    contents : String,
    category : String, //?대룞
    method : String, //?ъ쭊 || 湲
    tag : [String ], //洹몃９梨뚮┛吏硫붿씤?섏씠吏 ?ъ쭊 諛?
    member : Number,
    startDate : Date, //?몄젣遺???쒖옉?댁슂
    endDate : Date,
    term : Number, //15 30
    imageUrl : String,
    type :  String // 'group' 'personal'
    }*/
    useEffect(() => {
        getPercentage()
    }, []);
    async function getPercentage() {
        setPercentage(45);
    }
    return (
        <div className='eachContainer'>
            <div className='img-wrapper'>
                <img src={challenge.imageUrl} />
            </div>
            <div className='eachContents'>
                <div className= 'tags'>
                    
                {tags.map(tag => {
                    return (
                        <span className='tag'>{tag}</span>
                        )}
                        )}
                        </div>
                <div className='challengeTitle'>{challenge.title}</div>
            </div>

            <span id="percentage">{percentage}%</span>
            <div id="circularGauge">
                <CircularProgressbar
                    value={percentage}
                    strokeWidth={50}
                    styles={buildStyles({
                        strokeLinecap: "butt",
                        pathColor: `#438AC3`,
                        trailColor: '#EBF3F6',
                    })}
                /></div>
        </div>
    )
}
