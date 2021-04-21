import React from 'react'
import styles from "./GridItem.module.css";
import Image from "next/image";
import {FaInfo} from 'react-icons/fa';

const GridItem = ({ title, description, github, live, tech, image }) => {
    return (
        <div className={styles.card}>
            <Image src={image} width={300} height={400} className={styles.image}/>
            <div className={styles.content}>
                <FaInfo className={styles.icon}/>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}

export default GridItem
