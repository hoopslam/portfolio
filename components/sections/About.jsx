import React from "react";
import styles from "./About.module.css";
import Toolbelt from "../ui/Toolbelt";
import Fade from "react-reveal/Fade";
import { IoMdPaw } from "react-icons/io";

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.aboutContainer}>
				<div className={styles.leftContainer}>
					<div className={styles.description}>
						<div className={styles.titleSection}>
							<h1 className={styles.title}>About Me</h1>
						</div>
						<p>
							I'm a developer with a passion for making things, be it web apps,
							homemade kimchi, or cardboard box castles for my cat, Miru 😸. Whatever
							the endeavor, I genuinely enjoy the challenge of putting pieces together
							to create a beautiful and cohesive product.
						</p>
						<p>
							When building web apps, I like to use React to build out the front end.
							I've recently been using Next.js with styled components and am loving
							it! For the back end, Firebase has been my JAM but I can also use a bit
							of Node, Express, MongoDB and PostgreSQL.
						</p>
						<p>
							When I'm not making something, I'm usually learning how to make
							something. My goal is to continuously grow as a developer and to stay
							current with the latest trends and technologies.
						</p>
					</div>
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.details}>
						<div className={styles.detailsLeft}>
							<p>Nationality: USA</p>
							<p>Current Location: Seoul, South Korea</p>

							<h3>Languages</h3>
							<div className={styles.languagesContainer}>
								<div className={styles.languages}>
									<p>English</p>
									<p>Korean</p>
									<p>Spanish</p>
								</div>
								<div className={styles.pawRating}>
									<div>
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
									</div>
									<div>
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
										<IoMdPaw className={styles.paw} />
									</div>
									<div>
										<IoMdPaw className={styles.paw} />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.detailsRight}>
							<div className={styles.imageContainer}>
								<img
									className={styles.image}
									src='/assets/profile.jpg'
									alt='profile pic'
								/>
							</div>
						</div>
					</div>
					<div className={styles.skills}>
						<h2>My Tools</h2>
						<Toolbelt />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
