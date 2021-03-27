import React from "react";
import Logo from "./logo-component";

import GlobalMessage from "./global-message-component";

export default function NavigationBar() {
	return (
		<>
			<div id="navigation_bar" className="w-full">
				<div className="container mx-auto">
					<div className="py-5 flex items-center">
						<Logo />
						{/* grid-cols-4 */}
						<div className="grid grid-cols-3 gap-4 font-sans font-semibold text-center text-xl ml-auto">
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
							{/* <div>
								<a href="/about" className="text-gray-600 hover:text-purple-600">
									About
								</a>
							</div> */}
							<div>
								<a href="/find" className="text-gray-600 hover:text-purple-600">
									Find Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<GlobalMessage />
		</>
	);
}
