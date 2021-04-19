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
					content='Full stack developer with a passion for exceptional web experiences and a love of different cultures, basketball, and cats'
				/>
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
