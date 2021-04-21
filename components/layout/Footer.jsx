import React from 'react'
import styles from './Footer.module.css'
import {BiBasketball} from 'react-icons/bi';
import NameCard from "../ui/NameCard";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NameCard />     
        </footer>
    )
}

export default Footer
