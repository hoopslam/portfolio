import React from "react";
import styles from "./About.module.css";
import Toolbelt from "../ui/Toolbelt";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.bluestripe}></div>
			<div className={styles.graystripe}></div>
			<div className={styles.aboutContainer}>
				<Fade top>
					<h1 className={styles.title}>About Me</h1>
				</Fade>
				<div className={styles.top}>
					<div className={styles.description}>
						<Fade left>
							<p>
								I'm a web developer who loves working with awesome people and cool
								technologies such as React, Node, and Firebase. I've got a serious
								passion for making things, be it web apps, homemade kimchi, or
								cardboard box castles for my cat, Miru &#128568;.
							</p>
							<p>
								When it comes to web apps, here are some of the tools I use to
								build.
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
					<div className={styles.skills}>
						<Toolbelt />
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default About;
