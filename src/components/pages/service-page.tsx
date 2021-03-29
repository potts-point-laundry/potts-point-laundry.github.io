import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetShopPricing, IShopPrice, IShopPrices } from "../../api";
import BannerImage from "../../images/service-banner.jpg";
import WashIcon from "../../images/wash-icon.png";
import IronIcon from "../../images/iron-icon.png";
import DryCleanIcon from "../../images/dry-cleaning-icon.png";
import { Helmet } from "react-helmet-async";

const BannerImageContainer = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.4)), url(${BannerImage});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
`;

export default function ServicePage() {
	const [shopPrices, setShopPrices] = useState<IShopPrices | null>(null);

	useEffect(() => {
		async function fetchData() {
			const response = await GetShopPricing();
			response && setShopPrices(response);
		}

		fetchData();
	}, []);

	return (
		<>
			<BannerImageContainer id="banner" className="flex justify-center items-center h-96">
				<h1 className="font-family-lato font-semibold text-5xl text-center text-gray-50 banner-image-text">
					Price Guides
				</h1>
			</BannerImageContainer>
			<div className="container mx-auto pt-6 pb-14">
				<div>
					<div className="flex items-center py-4">
						<img src={WashIcon} alt="https://icons8.com/" className="mr-3 w-12" />
						<h1 className="font-family-roboto text-2xl">Laundry</h1>
					</div>
					{shopPrices && <RenderTable data={shopPrices.laundry} />}
				</div>
				<div>
					<div className="flex items-center py-4">
						<img src={IronIcon} alt="https://icons8.com/" className="mr-3 w-12" />
						<h1 className="font-family-roboto text-2xl">Pressing</h1>
					</div>
					{shopPrices && <RenderTable data={shopPrices.pressing} />}
				</div>
				<div>
					<div className="flex items-center py-4">
						<img src={DryCleanIcon} alt="https://icons8.com/" className="mr-3 w-12" />
						<h1 className="font-family-roboto text-2xl">Dry Cleaning</h1>
					</div>
					{shopPrices && <RenderTable data={shopPrices.dry_cleaning} />}
				</div>
			</div>
		</>
	);
}

type RenderTableProps = {
	data: IShopPrice[];
};

const RenderTable = (props: RenderTableProps) => {
	return (
		<>
			<SEOContent />
			<div className="bg-white shadow-md rounded">
				<table className="table-auto w-full">
					<thead>
						<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
							<th className="py-3 px-6 text-left uppercase">Service</th>
							<th className="py-3 px-6 text-right uppercase">Pricing</th>
						</tr>
					</thead>
					<tbody className="text-gray-600 text-sm font-light">
						{props.data.map((price, i) => {
							const backgroundColor = i % 2 ? "bg-gray-50" : "";
							return (
								<tr className={`border-b border-gray-200 hover:bg-gray-100 ${backgroundColor}`} key={i}>
									<td className="py-3 px-6 text-left">
										<p className="font-medium break-all">
											{price.name.trim()}{" "}
											{price.description && (
												<span className="font-normal text-sm text-gray-400">
													{" "}
													- {price.description.trim()}
												</span>
											)}
										</p>
									</td>
									<td className="py-3 px-6 text-right whitespace-nowrap">
										<span className="font-medium block">{price.price}</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

const SEOContent = () => {
	return (
		<Helmet>
			<title>Services - Potts Point Laundry & Dry Cleaning</title>
		</Helmet>
	);
};
