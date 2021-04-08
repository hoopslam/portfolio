import React from "react";
import styles from "../styles/Header.module.css";
import Fade from "react-reveal/Fade";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.textContainer}>
				<Fade top delay={500} duration={800}>
					<p className={styles.intro}>Hi, I'm</p>
				</Fade>
				<Fade bottom cascade delay={1000} duration={1000}>
					<h1 className={styles.name}>David</h1>
				</Fade>
				<Fade bottom delay={2500} duration={1200}>
					<p>
						A<span className={styles.sub}> Web Developer</span>, Basketball Fanatic, and Cat Servant
					</p>
				</Fade>
			</div>
		</header>
	);
};

export default Header;
