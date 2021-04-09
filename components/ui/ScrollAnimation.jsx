import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./scrollAnimation.module.css"

const ScrollAnimation = ({linkTo}) => {
	return (
		<Link href={`${linkTo}`}>
			<a>
				<div className={styles.ballContainer}>
					<div className={styles.ballBounce}>
						<Image src='/assets/basketball.png' layout='fill' objectFit='fill' />
					</div>
				</div>
			</a>
		</Link>
	);
};

export default ScrollAnimation;
