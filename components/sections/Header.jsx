import React from "react";
import styles from "./Header.module.css";
import Fade from "react-reveal/Fade";
import { IoMdPaw } from "react-icons/io";
import Image from "next/image";
import ScrollAnimation from "../ui/ScrollAnimation";

const Header = () => {
	return (
		<header className={styles.header}>
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
				<Fade bottom delay={2700} duration={1200}>
					<p>
						A<span className={styles.sub}> Web Developer</span>, Basketball Fanatic, and
						Cat Butler{" "}
						<IoMdPaw
							style={{
								color: "#d3d3d3",
								transform: "rotate(25deg) translate(0, 4px)",
							}}
						/>
					</p>
				</Fade>
			</div>
			<ScrollAnimation linkTo={"#about"} />
		</header>
	);
};

export default Header;
