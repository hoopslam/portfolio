import React from "react";
import styles from "./Header.module.css";
import Fade from "react-reveal/Fade";
import { IoMdPaw } from "react-icons/io";
import DownArrow from "../ui/DownArrow";

const Header = () => {
	return (
		<header id='home' className={styles.header}>
			<div className={styles.textContainer}>
				<div className={styles.intro}>
					<Fade top delay={500} duration={800}>
						<p>Hi!</p>
					</Fade>
					<Fade top delay={1200} duration={500}>
						<p>I'm</p>
					</Fade>
				</div>
				<Fade bottom cascade delay={1400} duration={600}>
					<h1 className={styles.name}>David</h1>
				</Fade>
				<Fade bottom delay={2500} duration={1200}>
					<p className={styles.description}>
						A <span className={styles.sub}> Web Developer</span>, basketball fanatic,
						and cat butler{" "}
						<IoMdPaw
							style={{
								color: "#d3d3d3",
								transform: "rotate(25deg) translate(0, 4px)",
							}}
						/>
					</p>
				</Fade>
			</div>
			<div className={styles.downArrowContainer}>
				<Fade top delay={3200} duration={1500}>
					<DownArrow next={"about"} />
				</Fade>
			</div>
		</header>
	);
};

export default Header;
