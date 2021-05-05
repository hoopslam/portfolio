const projectsList = [
	{
		title: "Disney Plus",
		description: [
			"A Disney+ look-alike project built with React and styled components.",
			"Once the user is logged in through google authentication, he or she will be redirected to the home page.",
			"The data on the home page is fetched from Firebase and stored into a Redux store.  It is then pulled from the store and populated onto the site",
			"You can click on the thumbnails and be redirected via react-router-dom to a details page which contains more details about the movie.",
		],
		techstack: "React(CRA), Redux, Styled Components, Firebase",
		thumb: [
			"/assets/projects/disneyplus0.png",
			"/assets/projects/disneyplus1.png",
			"/assets/projects/disneyplus2.png",
			"/assets/projects/disneyplus3.png",
		],
		github: "https://github.com/hoopslam/disneyplusclone",
		live: "https://disneyplus-clone-703c8.web.app/",
	},
	{
		title: "Covid-19 Tracker",
		description: [
			"A worldwide Covid-19 tracker app using live data sourced from Johns Hopkins University and Worldometers.",
			"As with many people across the world, Covid-19 was constantly on my mind in 2020/2021.  This project was a means for me to turn my worries into something productive.",
			"Built with React, the site features several UI components that rerender seamlessly based on user selection or input.",
			"I hope you all stay safe out there and take all the necessary precautions to help stop the spread of this terrible pandemic",
		],
		techstack: "React(CRA), disease.sh API, React-Leaflet, Chart-JS",
		thumb: [
			"/assets/projects/covid-0.jpg",
			"/assets/projects/covid-1.png",
			"/assets/projects/covid-2.png",
			"/assets/projects/covid-3.png",
		],
		github: "https://github.com/hoopslam/Covid-19-tracker",
		live: "https://hoopslam.github.io/Covid-19-tracker/",
	},
	{
		title: "Portfolio Website for Illustrator/Animator",
		description: [
			"A fast and responsive portfolio website for Illustrator/Animator Lee Jiseon.",
			"She had a lot of heavy image files but still wanted a clean website that could load fast. I chose Next.js for this project because of its static site generation and built-in optimization features such as lazy loading and image optimization.",
			"To further enhance performance, I built a separate pop-up modal for each of her projects.  This helped to keep a clean layout while packing a ton of content on this single page app. This had the added benefit of more lazy loaded images",
			"A simple contact form so that her prospective clients can easily reach her.",
		],
		techstack: "React (Next.js), CSS Modules, Vercel ",
		thumb: [
			"/assets/projects/jiseon-0.png",
			"/assets/projects/jiseon-1.png",
			"/assets/projects/jiseon-2.png",
			"/assets/projects/jiseon-3.png",
		],
		github: "https://github.com/hoopslam/lee_jiseon",
		live: "https://www.jiseonlee.art/",
	},
];

export default projectsList;
