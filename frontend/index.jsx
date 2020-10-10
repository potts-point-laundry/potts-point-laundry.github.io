import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";

import App from "./App.jsx";

function Index() {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

ReactDOM.render(<Index />, document.getElementById("root"));
