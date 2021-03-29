import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import BannerImage from "../../images/store_front.jpg";

const BannerImageContainer = styled.div`
	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.4)), url(${BannerImage});
	background-repeat: no-repeat;
	background-position: top center;
	background-size: cover;
`;

export default function AboutPage() {
	return (
		<>
			<SEOContent />
			<BannerImageContainer id="banner" className="banner-image flex justify-center items-center h-96">
				<h1 className="font-family-lato font-semibold text-5xl text-center text-gray-50 banner-image-text">
					Our Story
				</h1>
			</BannerImageContainer>
			<div className="container mx-auto pb-14">
				<br />
				<br />
				<br />
				<br />
				<h1 className="text-center text-5xl font-semibold text-indigo-800">Our story is coming soon!</h1>
				<br />
				<br />
				<br />
				<br />
			</div>
		</>
	);
}

const SEOContent = () => {
	return (
		<Helmet>
			<title>About Us - Potts Point Laundry & Dry Cleaning</title>
		</Helmet>
	);
};
