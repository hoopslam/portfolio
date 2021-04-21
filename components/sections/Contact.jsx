import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm("service_f4t6rk9", "template_hx5g5sc", e.target, "user_XtYyMqV78dTetP6lLHnBA")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<div className={styles.container}>
			<form className={styles.contact} onSubmit={sendEmail}>
				<input type='text' name='name' placeholder='Name' required />
				<input type='email' name='email' placeholder='Email' required />
				<input type='text' name='subject' placeholder='Subject' required />
				<textarea required name='message' cols='30' rows='8' placeholder='Your Message' />
				<div className={styles.buttonContainer}>
					<button type='submit'>Send Message</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
