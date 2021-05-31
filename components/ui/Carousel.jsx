import React from "react";
import styles from "./Carousel.module.css";

const CustomCarousel = ({ imageArray, activeImage, next, prev }) => {
	return (
		<div className={styles.container}>
			<div className={styles.left} onClick={prev}>
				<div className={`${styles.arrow} ${styles.leftArrow}`}>{"<"}</div>
			</div>
			<div className={styles.right} onClick={next}>
				<div className={`${styles.arrow} ${styles.rightArrow}`}>{">"}</div>
			</div>
			{imageArray.map((image, index) => (
				<div
					key={index}
					className={
						index === activeImage
							? `${styles.slide} ${styles.active}`
							: `${styles.slide}`
					}>
					{index === activeImage && (
						<img className={styles.image} src={image} alt="project image" style={{objectFit: "cover"}}/>
					)}
				</div>
			))}
		</div>
	);
};

export default CustomCarousel;
