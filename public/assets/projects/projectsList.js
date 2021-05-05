const projectsList = [
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
