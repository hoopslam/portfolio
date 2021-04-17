const projectsList = [
	{
		title: "Covid-19 Tracker",
		description: [
			"A worldwide Covid-19 tracker app using live data sourced from Johns Hopkins University and Worldometers.", 
			"Built with React, the app was made with user interactivity in mind.  Depending on what the user inputs, the app rerenders the appropriate components.  Here, the user searches for U and the app will automatically create a filtered search list with all the countries that begin with U.",
			"Since the user searched for 'USA', the country summary component will render the latest data for the country including the flag, population, and vital covid-19 related data.  To help visualize the data, I used chart.js, a popular chart library for javascript.",
			"In addition, I built a custom bar graph with plain CSS and jsx just for fun :P.  If it's not too hard to implement on my own, I do enjoy creating my own solutions instead of resorting to extra libraries.  The drop down menu is a data type selector which will update all the graphs to reflect the selected data type"
		],
		techstack: "React, disease.sh API, React-Leaflet, Chart-JS",
		thumb: ["/assets/projects/covid-0.jpg", "/assets/projects/covid-1.png", "/assets/projects/covid-2.png", "/assets/projects/covid-3.png"],
		github: "https://github.com/hoopslam/Covid-19-tracker",
		live: "https://hoopslam.github.io/Covid-19-tracker/",
	},
	{
		title: "Animator Portfolio Website",
		description: [
			"A fast and responsive portfolio website for Animator/Illustrator Lee Jiseon.",
			"She had a lot of heavy animation and image files and her previous site took forever to load.  She wanted me to build her a clean, fast website that could actually load her heavy animation files.",
			"I chose Next.js for this project because of some of its new built in optimization features such as lazy loading and image optimization.  To further enhance performance, I built a separate pop-up modal for each of her projects so that her images/animations wouldn't have to be loaded all at once on the home page.",
			"And of course, since this is her portfolio site, she had to have a contact form that will alert her whenever a prospective client wanted to contact her.",
		],
		techstack: "React (Next.js), Vercel ",
		thumb: ["/assets/projects/jiseon-0.png", "/assets/projects/jiseon-1.png", "/assets/projects/jiseon-2.png", "/assets/projects/jiseon-3.png"],
		github: "https://github.com/hoopslam/lee_jiseon",
		live: "https://www.jiseonlee.art/",
	},
];

export default projectsList;
