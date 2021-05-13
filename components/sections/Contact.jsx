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
		alert("Thanks! I'll get back to you as soon as possible!")
	}

	return (
		<div id='contact' className={styles.contact}>
			<div className={styles.container}>
				<div className={styles.text}>
					<h1>Drop me a Line!</h1>
					<p>Want to get a hold of me? Send me a message!</p>
				</div>

				<form className={styles.formContainer} onSubmit={sendEmail}>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' required />
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' required />
					<label htmlFor='subject'>Subject</label>
					<input type='text' name='subject' required />
					<label htmlFor='message'>Message</label>
					<textarea required name='message' cols='30' rows='8' />
					<button
						className={styles.button}
						type='submit'
					>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
