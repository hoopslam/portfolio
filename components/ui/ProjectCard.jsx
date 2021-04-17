import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import CustomCarousel from "./CustomCarousel";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
	const [activeImage, setActiveImage] = useState(0);
	const length = project.thumb.length;

	//Check to see if we are actually getting an array and it's length is greater than 0;
	if (!Array.isArray(project.thumb) || project.thumb.length <= 0) {
		return null;
	}

	const next = () => {
		setActiveImage(activeImage === length - 1 ? 0 : activeImage + 1);
	};

	const prev = () => {
		setActiveImage(activeImage === 0 ? length - 1 : activeImage - 1);
	};

	return (
		<Fade bottom>
			<div className={styles.projectContainer}>
				<div className={styles.projectDescription}>
					<h2>{project.title}</h2>
					<p>{project.description[activeImage]}</p>
					<div>
						<div className={styles.techContainer}>
							<p><strong>Build with: </strong>{project.techstack}</p>
						</div>
						<div className={styles.buttonsContainer}>
							<a href={project.github} target='_blank'>
								<div className={`${styles.button} ${styles.code}`}>View Code</div>
							</a>
							<a href={project.live} target='_blank'>
								<div className={`${styles.button} ${styles.live}`}>Live Site</div>
							</a>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<CustomCarousel
						imageArray={project.thumb}
						activeImage={activeImage}
						next={next}
						prev={prev}
					/>
				</div>
			</div>
		</Fade>
	);
};

export default ProjectCard;
