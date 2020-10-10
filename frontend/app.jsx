import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import Routes from "./Routes.jsx";

export default function App() {
	return (
		<Router>
			<NavigationBar />
			<Routes />
			<Footer />
		</Router>
	);
}
