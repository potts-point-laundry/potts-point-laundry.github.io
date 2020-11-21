// require("@babel/register")({
// 	presets: ["@babel/preset-env", "@babel/preset-react"],
// });

import Routes from "../frontend/Routes.jsx";
import Sitemap from "react-router-sitemap";

function generateSitemap() {
	return new Sitemap(Routes()).build("https://www.pottspointlaundry.com").save("./docs/sitemap.xml");
}

generateSitemap();
