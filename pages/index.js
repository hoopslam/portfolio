import Layout from "../components/layout/Layout";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Skills from "../components/sections/Skills";

export default function Home() {
	return (
		<Layout>
			<Header />
			<About />
			<Projects />
			<Contact />
		</Layout>
	);
}
