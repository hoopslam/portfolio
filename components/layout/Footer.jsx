import React from "react";
import styles from "./Footer.module.css";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {GoLocation} from "react-icons/go";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>
					<h1>David Cho</h1>
					<p>&copy; Copyright 2021 All rights reserved</p>
					<p>Site built with Next.js and plenty of coffee</p>
				</div>
				<div className={styles.right}>
					<a href='mailto: hoopslam@gmail.com'>
						<p>
							<span className={styles.icon}>
								<AiOutlineMail />
							</span>
							hoopslam@gmail.com
						</p>
					</a>
					<p>
						<span className={styles.icon}>
							<GoLocation />
						</span>
						Seoul, South Korea
					</p>
					<p>
						<span className={styles.icon}>
							<AiOutlinePhone />
						</span>
						010-8974-5677
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
