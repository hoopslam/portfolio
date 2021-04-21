import React from "react";
import styles from "./Skills.module.css";
import Fade from "react-reveal";
import Toolbelt from "../ui/Toolbelt";

const Skills = () => {
	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.container}>
				<Fade bottom fraction={1}>
					<div className={styles.text}>
						<h1>Some of the tools I use</h1>
					</div>
					<div className={styles.toolkit}>
						<Toolbelt />
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Skills;
