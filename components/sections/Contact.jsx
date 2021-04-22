import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<div id='contact' className={styles.contact}>
			<div className={styles.container}>
				<h1>How to Reach Me</h1>
				
				<p>
					The simplest way to reach me is via email. I usually respond within 24 hours but
					in case I don't, feel free to reach me at one of my social links!
				</p>
				<a href='mailto:hoopslam@gmail.com'>
					<div className={styles.button}>Send Email</div>
				</a>
			</div>
		</div>
	);
};

export default Contact;
