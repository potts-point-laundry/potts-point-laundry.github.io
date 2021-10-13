import React, { useState, useEffect } from "react";
import Logo from "./logo-component";

import { findValue, GetShopDetails, IShopDetails } from "../api";

export default function Footer() {
	// const storeData: IShopDetails[] = GetShopDetails()

	const [storeData, setStoreData] = useState<IShopDetails[]>();

	useEffect(() => {
		async function fetchData() {
			const response = await GetShopDetails();
			response && setStoreData(response);
		}

		fetchData();
	}, []);

	return (
		<div id="footer" className="w-full pt-10 pb-4 border-t-8 border-indigo-900">
			<div className="container mx-auto">
				<div className="grid gap-10 grid-cols-6 auto-cols-max p-2 md:p-0">
					<div className="col-span-6 md:col-span-4">
						<Logo />
						<div className="font-family-roboto-condensed text-xl font-normal mt-2">
							<a
								href="https://goo.gl/maps/pwXK4ptWuu8Ezj5U6"
								className="hover:text-blue-500"
								target="__blank">
								<h1>138 Victoria Street, Potts Point NSW 2011</h1>
							</a>
							{storeData && <h1>Monday - Friday: {findValue(storeData, "mon_fri")}</h1>}
							{storeData && <h1>Saturday - Sunday: {findValue(storeData, "sat_sun")}</h1>}
							<h1 className="text-base">Last wash - 1 hour before closing.</h1>
						</div>
					</div>
					<div className="font-sans text-left text-xl col-span-3 md:col-span-1 md:ml-auto">
						<h1 className="font-semibold pb-2">Information</h1>
						<div className="grid grid-rows-3 gap-1">
							<a className="text-gray-600 hover:text-purple-600" href="/">
								Home
							</a>
							<a className="text-gray-600 hover:text-purple-600" href="/about">
								About
							</a>
							<a className="text-gray-600 hover:text-purple-600" href="/services">
								Services
							</a>
							<a className="text-gray-600 hover:text-purple-600" href="/find">
								Find Us
							</a>
						</div>
					</div>
					<div className="font-sans text-left text-xl col-span-3 md:col-span-1 md:ml-auto">
						<h1 className="font-semibold pb-2">Contact</h1>
						<div className="grid grid-rows-3 gap-1">
							{storeData && (
								<a
									className="text-gray-600 hover:text-purple-600"
									href={`tel:${findValue(storeData, "contact_number")}`}>
									{findValue(storeData, "contact_number")}
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
			<div id="copyright-text" className="text-center font-sans text-base pt-4">
				<h1>© Copyright {new Date().getFullYear()} Potts Point Laundry & Dry Cleaning. All Rights Reserved.</h1>
			</div>
		</div>
	);
}
