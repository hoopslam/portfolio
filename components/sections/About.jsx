import React from "react";
import styles from "./About.module.css";
import Toolbelt from "../ui/Toolbelt";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.aboutContainer}>
				<Fade top>
					<h1 className={styles.title}>About Me</h1>
				</Fade>
				<div className={styles.top}>
					<div className={styles.description}>
						<Fade left>
							<p>
								I'm a Javascript developer from California now living in Seoul. I
								work mostly with React, REST/3rd party APIs, Node, Express, MongoDB,
								and or PostgreSQL but always enjoy learning about and using new
								technologies.
							</p>
						</Fade>
						<Fade left>
							<p>
								When I'm not coding, I'm usually watching NBA highlights, playing
								with my cat, Miru, or cooking something scrumptious to eat.
							</p>
						</Fade>
					</div>
					<Fade right>
						<div className={styles.imageContainer}>
							<Image
								className={styles.image}
								src={"/assets/profile.jpg"}
								width={200}
								height={200}
							/>
						</div>
					</Fade>
				</div>
				<Fade bottom>
					<h1 className={styles.tools}>Some of the tools I use</h1>
					<div className={styles.skills}>
						<Toolbelt />
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default About;
