import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import FindUsPage from "./pages/FindUs.jsx";
import AboutUsPage from "./pages/aboutus.jsx";
import SevicesPage from "./pages/Services.jsx";

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/aboutus" exact>
				<AboutUsPage />
			</Route>
			<Route path="/findus" exact>
				<FindUsPage />
			</Route>
			<Route path="/services" exact>
				<SevicesPage />
			</Route>
		</Switch>
	);
}
