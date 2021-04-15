import React, { useState } from "react";

import styles from "./CustomCarousel.module.css";

const CustomCarousel = ({ imageArray }) => {
	const [activeImage, setActiveImage] = useState(0);
	const length = imageArray.length;

	const next = () => {
		setActiveImage(activeImage === length - 1 ? 0 : activeImage + 1);
	};

	const prev = () => {
		setActiveImage(activeImage === 0 ? length - 1 : activeImage - 1);
	};

	//Check to see if we are actually getting an array and it's length is greater than 0;
	if (!Array.isArray(imageArray) || imageArray.length <= 0) {
		return null;
	}

	return (
		<div className={styles.container}>
			<div className={`${styles.arrow} ${styles.left}`} onClick={prev}>{'<'}</div>
			<div className={`${styles.arrow} ${styles.right}`} onClick={next}>{'>'}</div>
			{imageArray.map((image, index) => (
				<div
					key={index}
					className={
						index === activeImage
							? `${styles.slide} ${styles.active}`
							: `${styles.slide}`
					}>
					{index === activeImage && (
						<img
							className={styles.image}
							src={image.src}
							alt={image.description}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default CustomCarousel;
