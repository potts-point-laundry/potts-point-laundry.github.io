import React, { useContext, useEffect, useState } from "react";
import Logo from "./logo-component";

import { GetShopDetails, getValueByName, IShopDetails } from "../api";

export default function Footer() {
	const [shopData, setShopData] = useState<[IShopDetails]>();

	useEffect(() => {
		async function fetchData() {
			const response = await GetShopDetails();

			if (response) {
				setShopData(response);
			}
		}
		fetchData();
	}, []);

	return (
		<div id="footer" className="w-full pt-10 pb-4">
			{shopData && console.log(getValueByName(shopData, "mon_fri"))}
			<div className="container mx-auto">
				<div className="grid grid-cols-6 gap-10 auto-cols-max">
					<div className="col-span-4">
						<Logo />
						<div className="font-family-roboto-condensed text-xl font-normal mt-2">
							<a
								href="https://goo.gl/maps/pwXK4ptWuu8Ezj5U6"
								className="hover:text-blue-500"
								target="__blank">
								<h1>138 Victoria Street, Potts Point NSW 2011</h1>
							</a>
							{shopData && (
								<>
									<h1>Mon - Fri: {getValueByName(shopData, "mon_fri")}</h1>
									<h1>Sat - Sun: {getValueByName(shopData, "sat_sun")}</h1>
								</>
							)}
							<h1 className="text-base">Last wash - 1 hour before closing.</h1>
						</div>
					</div>
					<div className="font-sans text-left text-xl ml-auto">
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
					<div className="font-sans text-left text-xl ml-auto">
						<h1 className="font-semibold pb-2">Contact</h1>
						<div className="grid grid-rows-3 gap-1">
							<a className="text-gray-600 hover:text-purple-600" href="tel:+02 9357 3660">
								(02) 9357 3660
							</a>
						</div>
					</div>
				</div>
			</div>
			<div id="copyright-text" className="text-center font-sans text-base pt-4">
				<h1>
					Made by{" "}
					<a
						href="https://jimmyruann.github.io/"
						className="text-blue-400 : hover:text-blue-600"
						target="__blank">
						Jimmy Ruan
					</a>
					.
				</h1>
				<h1>© Copyright {new Date().getFullYear()} Potts Point Laundry & Dry Cleaning. All Rights Reserved.</h1>
			</div>
		</div>
	);
}
