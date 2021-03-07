import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import NavigationBar from "./components/navigation-component";
import Footer from "./components/footer-component";

export default function App() {
	return (
		<Router>
			<NavigationBar />
			<Routes />
			<Footer />
		</Router>
	);
}
