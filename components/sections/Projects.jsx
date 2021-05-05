import React from "react";
import styles from "./Projects.module.css";
import Fade from "react-reveal/Fade";
import projectsList from "../../public/assets/projects/projectsList";
import ProjectCard from "../ui/ProjectCard";
import extraProjects from "../../public/assets/projects/extraProjects";
import GridItem from "../ui/GridItem";

const Projects = () => {
	return (
		<section id='projects' className={styles.projects}>
			<div className={styles.bluestripe}></div>
			<div className={styles.graystripe}></div>
			<div className={styles.projectsContainer}>
				<div className={styles.title}>
					<Fade left>
						<h1>What I Do</h1>
						<p>Here's a few of my recent projects</p>
					</Fade>
				</div>
				{projectsList.map((project, i) => (
					<ProjectCard project={project} key={i} />
				))}
			</div>
			<div className={styles.theOthers}>
				<h1 className={styles.other}>Additional Projects</h1>
				<div className={styles.gridContainer}>
					{extraProjects.map(({ id, title, description, image, github, live, tech }) => (
						<div key={id} className={styles.gridItem}>
							<GridItem
								title={title}
								description={description}
								image={image}
								github={github}
								live={live}
								tech={tech}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
