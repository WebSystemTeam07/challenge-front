import styled, { keyframes } from "styled-components";
import styles from './atom.module.scss'

// function DonutChart({ percent }) {
//     return(
//         <div className={styles.donutContainer}>
//             <div className={styles.svgContainer} viewBox="0 0 200 200">
//                 <div className={styles.circleWrapper}>

//                 </div>
//                 <div className={styles.animationWrapper}>

//                 </div>
//                 <div className={styles.percentContainer}>

//                 </div>
//             </div>
//         </div>
//     );
// }

function DonutChart({ color, percent, size }) {
    return(
        <Chart size={size}>
            <AniSvg viewBox="0 0 250 250">
            <circle
                cx="125"
                cy="125"
                r="90"
                fill="none"
                stroke="#ebebeb"
                strokeWidth="35"
            />
            <AnimatedCircle
                cx="125"
                cy="125"
                r="90"
                fill="none"
                stroke={color}
                strokeWidth="35"
                strokeDasharray={`${2 * Math.PI * 90 * percent} ${
                    2 * Math.PI * 90 * (1 - percent)
            }`}
            strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
            </AniSvg>
            <Percent className={styles.percentContainer} color={color}>
                {percent * 100}%
                <p>성공율</p>
            </Percent>
        </Chart>
    );
}

export default DonutChart;

const Chart = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    position: relative;
`;

const AniSvg = styled.svg`
    position: relative;  
`;

const circleFill = keyframes`
    0%{
        stroke-dasharray:0 ${2 * Math.PI * 90};
    }
`;

const AnimatedCircle = styled.circle`
    animation: ${circleFill} 2s ease;
`;

const Percent = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: large;
    font-weight: 600;
    color: ${(props) => props.color};
`;