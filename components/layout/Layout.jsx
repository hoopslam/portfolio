import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>David Cho</title>
				<link rel='icon' href='/favicon.png' />
				<meta
					name='description'
					content='Full stack web developer based in Seoul, South Korea.'
				/>
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
