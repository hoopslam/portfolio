import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import styles from "./Carousel.module.css";

const CarouselUI = ({ position, total, handleClick, children }) => (
	<div className={styles.container}>
		{children}
		<div
			className={`${styles.arrow} ${styles.left}`}
			onClick={handleClick}
			data-position={position - 1}>
			{"<"}
		</div>
		<div
			className={`${styles.arrow} ${styles.right}`}
			onClick={handleClick}
			data-position={position + 1}>
			{">"}
		</div>
		<div className={styles.dots}>
			{Array(...Array(total)).map((val, index) => (
				<div className={styles.dot} onClick={handleClick} data-position={index}>
					{index === position ? "●" : "○ "}
				</div>
			))}
		</div>
	</div>
);

const CustomCarousel = makeCarousel(CarouselUI);

const Carousel = () => {
	return (
		<CustomCarousel defaultWait={8000}>
			<Fade right duration={1200}>
				<img
					src='/assets/projects/netflix-4-3.png'
					alt='project 1'
					className={styles.image}
				/>
			</Fade>
			<Fade right duration={1200}>
				<img
					src='/assets/projects/project-covid-4-3.jpg'
					alt='project 2'
					className={styles.image}
				/>
			</Fade>
			<Fade right duration={1200}>
				<img
					src='/assets/projects/netflix-4-3.png'
					alt='project 1'
					className={styles.image}
				/>
			</Fade>
		</CustomCarousel>
	);
};

export default Carousel;
