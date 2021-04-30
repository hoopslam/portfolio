const projectsList = [
	{
		title: "Disney Plus",
		description: [
			"A Disney+ look-alike project to mimic the front end of Disney+.",
			"Once the user is logged in through google authentication, he or she will be redirected to the home page.",
			"The data on the home page is fetched from Firebase and stored itno a Redux store.  It is then pulled from the store and populated onto the site",
			"You can click on the thumbnails and be redirected via react-router-dom to a details page which contains more details about the movie.",
		],
		techstack: "React(CRA), Redux, Styled Components, Firebase,",
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
			"Built with React, the app was made with user interactivity in mind.  Depending on what the user inputs, the app rerenders the appropriate components.  Here, the user searches for U and the app will automatically create a filtered search list with all the countries that begin with U.",
			"Since the user searched for 'USA', the country summary component will render the latest data for the country including the flag, population, and vital covid-19 related data.  To help visualize the data, I used chart.js, a popular chart library for javascript.",
			"The drop down menu is a data type selector which will update all the graphs and map to reflect the selected data type",
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
