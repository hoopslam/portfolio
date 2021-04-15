import React from "react";
import styles from "./DownArrow.module.css"
import Link from "next/link"

const DownArrow = ({next}) => {
	return (
		<div className={styles.arrowContainer}>
			<Link href={`#${next}`}>
				<a>
					<div className={styles.arrow}></div>
				</a>
			</Link>
		</div>
	);
};

export default DownArrow;
