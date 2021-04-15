import React from "react";
import styles from "./Skills.module.css";
import Fade from "react-reveal";
import Toolbelt from "../ui/Toolbelt";
import CustomCarousel from "../ui/CustomCarousel";

const Skills = () => {
	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.top}>
				<Fade right fraction={1}>
					<div className={styles.carouselContainer}>
						<CustomCarousel
							imageArray={[
								{ src: "/assets/projects/netflix-4-3.png", description: "asdf" },
								{ src: "/assets/projects/project-covid-4-3.jpg", description: "asdf" },
								{ src: "/assets/projects/jiseon-4-3.png", description: "asdf" },
							]}
						/>
					</div>
					<div className={styles.textTop}>
						<h1>What I Do...</h1>
						<p>
							From simple landing pages to full stack projects, I build responsive,
							high-performance web apps using modern web technologies and techniques.
						</p>
					</div>
				</Fade>
			</div>
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
