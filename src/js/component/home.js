import React from "react";

import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";

export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}
