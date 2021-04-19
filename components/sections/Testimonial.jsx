import React from "react";
import styles from "./Testimonial.module.css";
import Fade from "react-reveal";

const Testimonial = () => {
	return (
		<section className={styles.testimonialWrapper}>
			<div className={styles.testimonial}>
				<Fade>
                   <p>
					"I really appreciated how responsive David was. He added every feature that I
					wanted for my site, plus more! He went above and beyond what I expected and I'm
					so happy with my new site!"
				    </p>
                    <p className={styles.person}>Jiseon Lee</p>
                </Fade>
			</div>
		</section>
	);
};

export default Testimonial;
