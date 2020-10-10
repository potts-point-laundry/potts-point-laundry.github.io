import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavigationBar({ bg = "dark", variant = "dark" }) {
	// window.location.pathname
	const paths = [
		{ name: "Home", path: "/" },
		{ name: "Services", path: "/services" },
		{ name: "About Us", path: "/aboutus" },
		{ name: "Find Us", path: "/findus" },
	];

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg={bg}
			variant={variant}
			className="web-theme-bg-color"
		>
			<Container>
				<Navbar.Brand href="/" className="nav-brand">
					Potts Point Laundry & Dry Cleaning
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						{paths.map((each, i) => {
							return (
								<Nav.Link
									key={i}
									href={each.path}
									active={
										window.location.pathname === each.path
											? true
											: false
									}
								>
									{each.name.toUpperCase()}
								</Nav.Link>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
