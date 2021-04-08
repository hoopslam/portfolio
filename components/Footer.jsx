import React from 'react'
import styles from '../styles/Footer.module.css'
import {BiBasketball} from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.shoot}>
                <BiBasketball />
                <p>Take another shot!</p>
            </div>
            &copy; David Cho 2021        
        </footer>
    )
}

export default Footer
