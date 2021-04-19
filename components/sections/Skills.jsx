import React from "react";
import styles from "./Skills.module.css";
import Fade from "react-reveal";
import Toolbelt from "../ui/Toolbelt";

const Skills = () => {
	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.bottom}>
				<Fade bottom fraction={1}>
					<div className={styles.text}>
						<h1>My Toolkit</h1>
						<p>
							These are some of the major tools I use to get my apps up and running.
						</p>
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
