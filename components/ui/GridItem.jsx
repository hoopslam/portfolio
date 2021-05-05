import React from "react";
import styles from "./GridItem.module.css";
import Image from "next/image";
import { FaInfo, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const GridItem = ({ title, description, github, live, tech, image }) => {
	return (
		<Fade bottom>
			<p className={styles.title}>{title}</p>
			<div className={styles.card}>
				<Image src={image} width={300} height={400} className={styles.image} />
				<div className={styles.content}>
					<FaInfo className={styles.icon} />

					<p className={styles.description}>{description}</p>
					<p className={styles.description}>Built With: {tech}</p>
					<div>
						<a href={github} target='_blank'>
							<FaGithub size={30} className={styles.button} />
						</a>
						{live && (
							<a href={live} target='_blank'>
								<FaExternalLinkAlt size={30} className={styles.button} />
							</a>
						)}
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default GridItem;
