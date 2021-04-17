import React from "react";
import styles from "./Projects.module.css";
import Fade from "react-reveal/Fade";
import projectsList from "../../public/assets/projects/projectsList";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
	return (
		<section id='projects' className={styles.projects}>
			<div className={styles.projectsContainer}>
				<div className={styles.title}>
					<Fade top>
						<h1>What I Do...</h1>
						<h2>
							From simple landing pages to full stack projects, I build things for the
							web. Here's a few of my recent projects.
						</h2>
						<hr style={{ width: "100%", color: "gray" }} />
					</Fade>
				</div>
				{projectsList.map((project, i) => (
					<ProjectCard project={project} key={i}/>
				))}
			</div>
		</section>
	);
};

export default Projects;
