import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/home-page";
import FindPage from "./components/pages/find-page";
import ServicePage from "./components/pages/service-page";
import AboutPage from "./components/pages/about-page";

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/about" exact>
				<AboutPage />
			</Route>
			<Route path="/find" exact>
				<FindPage />
			</Route>
			<Route path="/services" exact>
				<ServicePage />
			</Route>
		</Switch>
	);
}
