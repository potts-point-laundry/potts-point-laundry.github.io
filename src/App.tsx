import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { HelmetProvider } from "react-helmet-async";
import NavigationBar from "./components/navigation-component";
import Footer from "./components/footer-component";
import GlobalMessage from "./components/global-message-component";

export default function App() {
	return (
		<Router>
			<HelmetProvider>
				<NavigationBar />
				<GlobalMessage />
				<Routes />
				<Footer />
			</HelmetProvider>
		</Router>
	);
}
