import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import '../styles/myPageTable.scss'

export default function EachChallenge(props) {
    const challenge = props.data
    const tags = challenge.tag
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        getPercentage()
    }, []);
    async function getPercentage() {
        const term = challenge.term //term
        const startDate = new Date(challenge.startDate).getTime() //challenge start
        const now = new Date() //now
        const diff = Math.floor((now.getTime() - startDate) / (1000 * 60 * 60 * 24)) //diff of day
        let percentage = Math.floor((diff / term) * 100) //percentage (ex 13%)
        if (percentage < 0)
            percentage = 0
        if (percentage > 100)
            percentage = 100
        setPercentage(parseInt(percentage));
    }
    return (
        <div className='eachContainer'>
            <div className='img-wrapper'>
                <img src={challenge.imageUrl} />
            </div>
            <div className='eachContents'>
                <div className='tags'>

                    {tags.map(tag => {
                        return (
                            <span className='tag'>{tag}</span>
                        )
                    }
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
