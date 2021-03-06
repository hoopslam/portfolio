import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [hidden, setHidden] = useState(true);

	//This function checks to see if the user scrolled past 100px, at which point the nav bar stops hiding
	const handleScroll = () => {
		window.scrollY > 100 ? setHidden(false) : setHidden(true);
	};

	//useEffect is used to add an event listener directly onto the window object.  
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`${styles.Navbar} ${hidden ? styles.hidden : null}`}>
			<div className={styles.navbarContainer}>
				<Link href='#home'>
					<a className={styles.navbarLogo}>
						<div className={styles.logoText}>
							<h1>David Cho</h1>
						</div>
					</a>
				</Link>
				<ul className={styles.listDesktop}>
					<li className={styles.listItem}>
						<Link href='#about'>
							<a><span className={styles.line}>About</span></a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#projects'>
							<a><span className={styles.line}>Projects</span></a>
						</Link>
					</li>
					<li className={styles.listItem}>
						<Link href='#contact'>
							<a><span className={styles.line}>Contact Me</span></a>
						</Link>
					</li>
				</ul>
				<ul className={`${styles.listMobile} ${active && styles.active}`}>
					<li className={styles.listItem} onClick={() => setActive(!active)}>
						<Link href='#home'>
							<a>Home</a>
						</Link>
					</li>
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
