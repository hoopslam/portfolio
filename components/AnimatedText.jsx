import React from 'react'
import styles from "../styles/AnimatedText.module.css"

const AnimatedText = ({text}) => {
    return (
        <svg className={styles.svgText} viewBox={'0 0 100 100'}>
            <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="central">
                {text}
            </text>
        </svg>
    )
}

export default AnimatedText
