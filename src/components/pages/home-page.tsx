import React from "react";
import BannerImage from "../../images/washing.png";

import CoinIcon from "../../images/coin-icon.png";
import OpenIcon from "../../images/open-icon.png";
import GoogleIcon from "../../images/google-icon.png";

import LocationImage from "../../images/location.png";
import WashingMachineImage from "../../images/washing-machine.png";
import HandShakeImage from "../../images/handshake.jpeg";

export default function HomePage() {
	return (
		<div className="w-full">
			<Banner />
			<Features />
			{/* <div className="container mx-auto py-10 px-20">
				<div className="grid grid-cols-2 gap-10">
					<div>
						<img src={LocationImage} alt="" className="w-9/12 block mx-auto" />
					</div>
					<div>
						<h1 className="font-family-roboto-condensed font-semibold text-4xl text-indigo-800">
							Convenient Location
						</h1>
					</div>
					<div>
						<img src={WashingMachineImage} alt="" className="w-9/12 block mx-auto" />
					</div>
					<div>
						<h1 className="font-family-roboto-condensed font-semibold text-4xl text-indigo-800">
							Professional Services With High Standards
						</h1>
					</div>
					<div>
						<img src={HandShakeImage} alt="" className="w-9/12 block mx-auto" />
					</div>
					<div>
						<h1 className="font-family-roboto-condensed font-semibold text-4xl text-indigo-800">
							Working With Businesses
						</h1>
					</div>
				</div>
			</div> */}
		</div>
	);
}

const Banner = () => {
	return (
		<div className="container mx-auto">
			<div id="banner" className="w-full">
				<div className="grid grid-cols-1 py-10 mx-auto gap-20 w-11/12 md:w-full md:gap-20 md:grid-cols-2">
					<div className="flex items-center justify-center">
						<div className="h-auto">
							<div className="font-family-roboto font-medium text-5xl">
								<h1 className="text-gray-600 pb-2 text-center md:text-left">Like Laundry</h1>
								<h1 className="text-gray-600 pb-4 text-center md:text-left">Like Never Before.</h1>
							</div>
							<p className="font-sans text-lg">
								Over the past decade, we have developed multiple laundry services for both personal and
								commercial. We have learned that excellent service begins and ends with experienced and
								friendly professionals who explain our rigorous laundry service.
							</p>
							<div>
								<a href="/services">
									<button className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-14 mt-6 uppercase w-full md:w-64">
										Our Services
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className="row-start-1 md:col-start-2">
						<img
							src={BannerImage}
							alt="https://www.freepik.com/vectors/abstract"
							className=" max-w-full w-96 mx-auto md:ml-auto"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

interface FeatureProps {
	iconSrc: string;
	heading: string;
	content: string;
	buttonText: string;
	buttonLink: string;
}

const Feature = (props: FeatureProps) => {
	return (
		<div className="relative text-center md:text-left">
			<img src={props.iconSrc} alt="https://icons8.com/" className="mx-auto md:mx-0" />
			<h1 className="font-family-lato text-xl font-bold py-3">{props.heading}</h1>
			<p className="font-family-roboto text-base font-normal whitespace-pre-line leading-5">{props.content}</p>
			<div className="pb-16">
				<a href={props.buttonLink}>
					<button className="h-11 font-semibold uppercase bg-yellow-400 hover:bg-yellow-300 mt-4 absolute inset-x-0 bottom-0 w-8/12 hover:text-indigo-800 text-indigo-900 mx-auto md:mx-0">
						{props.buttonText}
					</button>
				</a>
			</div>
		</div>
	);
};

const Features = () => {
	return (
		<div className="w-100 py-14 bg-indigo-900">
			<div className="container mx-auto text-white">
				<div className="grid grid-cols-1 gap-10 p-2 md:p-0 md:grid-cols-3 md:gap-20">
					{[
						{
							iconSrc: CoinIcon,
							heading: "Affordable Services",
							content: `High quality services does not mean expensive. \n\nOur rates are affordable while offering exceptional service.`,
							buttonText: "Services / Pricing",
							buttonLink: "/services",
						},
						{
							iconSrc: OpenIcon,
							heading: "Open 7 Days",
							content: `Any day any time. Get your laundry done on time. \n\nTime may vary on public holidays.`,
							buttonText: "Opening Hours",
							buttonLink: "/find",
						},
						{
							iconSrc: GoogleIcon,
							heading: "4+ Star Review",
							content: `We have one of the highest review rating in Potts Point and Kings Cross. \n\nWe ensure our customers are happy and satisfy with our services.`,
							buttonText: "Reviews",
							buttonLink: "http://shorturl.at/csAV1",
						},
					].map((each, i) => {
						return <Feature {...each} key={i} />;
					})}
				</div>
			</div>
		</div>
	);
};
