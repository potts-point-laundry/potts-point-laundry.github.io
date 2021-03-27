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
			<div className="container mx-auto py-10 px-20">
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
			</div>
		</div>
	);
}

const Banner = () => {
	return (
		<div className="container mx-auto">
			<div id="banner" className="w-full">
				<div className="grid grid-cols-2 gap-20 py-10">
					<div className="flex items-center justify-center">
						<div className="h-auto">
							<div className="font-family-roboto font-medium text-5xl">
								<h1 className="text-gray-600 pb-2">Like Laundry</h1>
								<h1 className="text-gray-600 pb-4">Like Never Before.</h1>
							</div>
							<p className="font-sans text-lg">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
								elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
								commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
								imperdiet. Nunc ut sem vitae risus tristique posuere.
							</p>
							<div>
								<a href="/services" className="mr-4">
									<button className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-14 mt-6 uppercase">
										Our Services
									</button>
								</a>
								<a href="/find">
									<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-14 mt-6 uppercase">
										Find Us
									</button>
								</a>
							</div>
						</div>
					</div>
					<div>
						<img
							src={BannerImage}
							alt="https://www.freepik.com/vectors/abstract"
							className="banner-image-home"
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
		<div className="relative">
			<img src={props.iconSrc} alt="https://icons8.com/" />
			<h1 className="font-family-lato text-xl font-bold py-3">{props.heading}</h1>
			<p className="font-family-roboto text-base font-normal whitespace-pre-line leading-5">{props.content}</p>
			<div className="pb-16">
				<a href={props.buttonLink}>
					<button className="custom-button font-semibold uppercase bg-yellow-400 hover:bg-yellow-300 mt-4 absolute inset-x-0 bottom-0 w-8/12 hover:text-indigo-800 text-indigo-900">
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
				<div className="grid grid-cols-3 gap-20">
					{[
						{
							iconSrc: CoinIcon,
							heading: "Affordable Services",
							content: `High quality services does not mean being expensive. \n\nOur rates are affordable while offering exceptional service.`,
							buttonText: "Services / Pricing",
							buttonLink: "/services",
						},
						{
							iconSrc: OpenIcon,
							heading: "Open 7 Days",
							content: `Any day any time. Have your laundry done on time. \n\nTime may vary on public holidays.`,
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
