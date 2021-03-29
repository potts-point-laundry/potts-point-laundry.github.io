import React, { useContext } from "react";
import styled from "styled-components";
import { ApiStoreDetailsContext } from "../../context/ApiDataContext";
import BannerImage from "../../images/findus-banner.jpg";
import { Helmet } from "react-helmet-async";

const BannerImageContainer = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.4)), url(${BannerImage});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
`;

export default function FindPage() {
	const storeData: { [key: string]: string } = useContext(ApiStoreDetailsContext);

	return (
		<>
			<SEOContent />
			<BannerImageContainer id="banner" className="flex justify-center items-center h-96">
				<h1 className="font-family-lato font-semibold text-5xl text-center text-gray-50 banner-image-text">
					Where Are We Located?
				</h1>
			</BannerImageContainer>
			<div className="container mx-auto pb-14">
				<h1 className="text-indigo-800 text-center text-3xl py-8">Potts Point Laundry & Dry Cleaning</h1>

				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:px-0">
					<div>
						<h1 className="text-3xl">Address</h1>
						<div className="text-gray-600 py-4">
							<p className="pb-4">
								We are 3 minute walk from King's Cross station on Victoria Street, Potts Point. Our
								contact number is{" "}
								<a
									href={`tel:${storeData.contact_number}`}
									className="text-blue-400 hover:text-blue-600">
									{storeData.contact_number}
								</a>
								.
							</p>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<span className="block pb-2">The address is:</span>
									<p className="whitespace-pre-line italic leading-7">{`138 Victoria Street, \nPotts Point,\nNSW, 2011`}</p>
								</div>
								<div>
									<span className="block pb-2">Our opening hour is:</span>
									<p className="whitespace-pre-line italic leading-7">{`Monday - Friday: ${storeData.mon_fri}\nSaturday - Sunday: ${storeData.sat_sun}\nLast wash is 1 hour before closing.`}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row-start-1 md:col-start-2">
						<iframe
							title="Google Map"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3312.686388294924!2d151.2208282!3d-33.8719723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae72b389a571%3A0xccdfb3dfcae3102e!2sPotts%20Point%20Laundry!5e0!3m2!1sen!2sau!4v1614830771641!5m2!1sen!2saus"
							className="border-none w-full h-full"
							style={{
								minHeight: 450,
							}}></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

const SEOContent = () => {
	return (
		<Helmet>
			<title>Find Us - Potts Point Laundry & Dry Cleaning</title>
		</Helmet>
	);
};
