import React from "react";
import styles from "./About.module.css";
import Toolbelt from "../ui/Toolbelt";
import Dot from "../ui/Dot";

const FLUENT = 5;
const PROFICIENT = 4;
const BEGINNER = 1;

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
							homemade kimchi, or cardboard box castles for my cat. Whatever the
							endeavor, I genuinely enjoy the challenge of putting small pieces
							together to create a beautiful and cohesive product.
						</p>
						<p>
							When building web apps, I mainly use React to build out the front end.
							I've recently been using Next.js with styled components and am loving
							it! For the back end, Firebase has been my JAM but I can also use a bit
							of Node, Express, MongoDB and PostgreSQL.
						</p>
						<p>
							Outside of coding, I love spending time with my fiancee and our cat,
							Miru 😸. I follow my basketball religiously (let's go Clippers!) and
							unwind in the evenings with a bit of Overwatch, PUBG, or Civ.
						</p>
					</div>
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.details}>
						<div className={styles.detailsLeft}>
							<p>Nationality: USA</p>
							<p>Race: Zerg</p>
							<p>Current Location: Seoul</p>
							<p>Availability: Worldwide</p>

							<h3>Languages</h3>
							<div className={styles.languagesContainer}>
								<div className={styles.languages}>
									<p>English</p>
									<p>Korean</p>
								</div>
								<div>
									<div>
										{[...Array(FLUENT)].map((e, i) => (
											<Dot key={i} />
										))}
									</div>
									<div>
										{[...Array(PROFICIENT)].map((e, i) => (
											<Dot key={i} />
										))}
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
						<h2>My Favorite Tools</h2>
						<Toolbelt />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
