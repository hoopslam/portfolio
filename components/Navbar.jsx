import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { BiBasketball } from "react-icons/bi";

const Navbar = () => {
	const [active, setActive] = useState(false);
	return (
		<nav className={styles.Navbar}>
			<div className={styles.navbarContainer}>
				<Link href='#home'>
					<a className={styles.navbarLogo}>
						<div className={styles.logoContainer}>
							<BiBasketball size={"100%"} />
						</div>
						<div className={styles.logoText}>
							<h1>David Cho</h1>
						</div>
					</a>
				</Link>
				<ul className={styles.listDesktop}>
					<li className={styles.listItem}>
						<Link href='#about'>
							<a>About</a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#projects'>
							<a>Projects</a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#skills'>
							<a>Skills</a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#contact'>
							<a>Contact Me</a>
						</Link>
					</li>
				</ul>
				<ul className={`${styles.listMobile} ${active && styles.active}`}>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#about'>
							<a>About</a>
						</Link>
					</li>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#projects'>
							<a>Projects</a>
						</Link>
					</li>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#skills'>
							<a>Skills</a>
						</Link>
					</li>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#contact'>
							<a>Contact Me</a>
						</Link>
					</li>
				</ul>
				<button
					onClick={() => setActive(!active)}
					className={`${styles.hamburger} ${active && styles.active}`}>
					<div className={styles.bar}></div>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
