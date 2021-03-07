import React, { useEffect, useState } from "react";
import Logo from "./logo-component";

import { GetGlobalMessage } from "../api";
import GlobalMessage from "./global-message-component";

export default function NavigationBar() {
	const [globalMessage, setGlobalMessage] = useState<string>("");

	useEffect(() => {
		async function startUp() {
			const message = await GetGlobalMessage();
			message && setGlobalMessage(message);
		}

		startUp();
	}, []);

	return (
		<>
			<div id="navigation_bar" className="w-full">
				<div className="container mx-auto">
					<div className="py-5 flex items-center">
						<Logo />
						<div className="grid grid-cols-4 gap-4 font-sans font-semibold text-center text-xl ml-auto">
							<div>
								<a href="/" className="text-gray-600 hover:text-purple-600">
									Home
								</a>
							</div>
							<div>
								<a href="/services" className="text-gray-600 hover:text-purple-600">
									Services
								</a>
							</div>
							<div>
								<a href="/about" className="text-gray-600 hover:text-purple-600">
									About
								</a>
							</div>
							<div>
								<a href="/find" className="text-gray-600 hover:text-purple-600">
									Find Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{globalMessage && <GlobalMessage message={globalMessage} />}
		</>
	);
}
