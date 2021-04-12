import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import styles from "./NameCard.module.css"

const NameCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.info}>
				<h1 className={styles.name}>David Cho</h1>
				<h2 className={styles.sub}>Web Developer</h2>
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
						<AiOutlinePhone />
					</span>
					010-8974-5677
				</p>
				<p>
					<span className={styles.icon}>
						<GoLocation />
					</span>
					Seoul, South Korea
				</p>
				<div className={styles.social}>
					<a href='https://github.com/hoopslam'>
						<FiGithub size={30} />
					</a>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image
					className={styles.image}
					src='/assets/profile.jpg'
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
};

export default NameCard;
