import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./GridCard.module.css";
import Image from "next/image";

const gridCard = ({ title, description, github, live, tech, image }) => {
	return (
		<div className={styles.GridCardContainer}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.imageContainer}>
				<Image className={styles.image} src={image} width={300} height={400} />
			</div>
			<div className={styles.overlay}>
				<p className={styles.description}>{description}</p>
				<p className={styles.tech}>{tech}</p>
			</div>
			<div className={styles.icons}>
				<a href={github}>
					<FiGithub size={30} />
				</a>
				<a href={live}>
					<FiExternalLink size={30} />
				</a>
			</div>
		</div>
	);
};

export default gridCard;
