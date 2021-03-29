import React, { useState } from "react";
import Logo from "./logo-component";
import styled from "styled-components";

const Line = styled.span<{ open: boolean }>`
	display: block;
	border-radius: 50px;
	width: 40px;
	height: 4px;
	margin: 6px;
	background-color: #374151;
	transition: width 0.4s ease-in-out;

	:nth-child(2) {
		width: ${(props) => (props.open ? "50%" : "40px")};
	}
`;

const NavIcon = styled.button`
	background: none;
	cursor: pointer;
	border: none;
	outline: none;
`;

export default function NavigationBar() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<div id="navigation_bar" className="w-full">
				<div className="container mx-auto">
					<div className="py-5 flex items-center justify-between">
						<Logo />
						<div className="hidden md:block">
							<div className={`grid grid-cols-4 gap-4 font-sans font-semibold text-center text-xl`}>
								<RenderNavItems />
							</div>
						</div>
						<div className="block md:hidden">
							<NavIcon onClick={() => setToggle(!toggle)}>
								<Line open={toggle} />
								<Line open={toggle} />
								<Line open={toggle} />
							</NavIcon>
						</div>
					</div>
					<div
						className={`md:hidden ${
							toggle ? "opacity-100 h-auto" : "opacity-0 h-0"
						} transition-all ease-in-out duration-150`}>
						<div className="grid grid-cols-4 gap-4 font-sans font-semibold text-center text-xl w-full pb-5">
							<RenderNavItems />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const RenderNavItems = () => {
	const navItems = [
		{ name: "Home", url: "/" },
		{ name: "Services", url: "/services" },
		{ name: "About", url: "/about" },
		{ name: "Find Us", url: "/find" },
	];

	return (
		<>
			{navItems.map((each, i) => {
				return (
					<div key={i}>
						<a href={each.url} className="text-gray-600 hover:text-purple-600">
							{each.name}
						</a>
					</div>
				);
			})}
		</>
	);
};
