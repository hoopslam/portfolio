import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Carousel from "./Carousel";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
	const [activeImage, setActiveImage] = useState(0); //state lifted to here because this component needs the state to render the proper description
	const imageArray = [...project.thumb];

	//Check to see if we are actually getting an array and it's length is greater than 0;
	if (!Array.isArray(imageArray) || imageArray.length <= 0) {
		return null;
	}

	const next = () => {
		setActiveImage(activeImage === imageArray.length - 1 ? 0 : activeImage + 1);
	};

	const prev = () => {
		setActiveImage(activeImage === 0 ? imageArray.length - 1 : activeImage - 1);
	};

	return (
		<Fade bottom>
			<div className={styles.projectContainer}>
				<div className={styles.projectDescription}>
					<h2>{project.title}</h2>
					<div className={styles.buttonsContainer}>
						<a href={project.github} target='_blank'>
							<div className={`${styles.button} ${styles.code}`}>View Code</div>
						</a>
						<a href={project.live} target='_blank'>
							<div className={`${styles.button} ${styles.live}`}>Live Site</div>
						</a>
					</div>
					<div className={styles.techContainer}>
						<p>
							<strong>Built with: </strong>
							{project.techstack}
						</p>
					</div>
					<p className={styles.desc}>{project.description[activeImage]}</p>
				</div>
				<div className={styles.vertical}></div>
				<div className={styles.imageContainer}>
					<Carousel
						imageArray={project.thumb}
						activeImage={activeImage}
						next={next}
						prev={prev}
					/>
					<div className={styles.dots}>
						{imageArray.map((image, i) => (
							<div
								className={`${styles.dot} ${i === activeImage && styles.activeDot}`}
								key={i}
								onClick={() => setActiveImage(i)}>
								{i === activeImage ? "● " : "○ "}
							</div>
						))}
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default ProjectCard;
