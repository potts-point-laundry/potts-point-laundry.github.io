import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import NavigationBar from "./components/navigation-component";
import Footer from "./components/footer-component";

import { ApiStoreDetailsContext } from "./context/ApiDataContext";
import { GetShopDetails } from "./api";

export default function App() {
	const [storeData, setStoreData] = useState<{ [key: string]: string }>({});

	useEffect(() => {
		async function fetchData() {
			const response = await GetShopDetails();
			response && setStoreData({ ...response });
		}
		fetchData();
	}, []);

	return (
		<ApiStoreDetailsContext.Provider value={storeData}>
			<Router>
				<NavigationBar />
				<Routes />
				<Footer />
			</Router>
		</ApiStoreDetailsContext.Provider>
	);
}
