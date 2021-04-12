import Layout from "../components/layout/Layout";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

export default function Home() {

	return (
    <Layout>
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </Layout>
	);
}
