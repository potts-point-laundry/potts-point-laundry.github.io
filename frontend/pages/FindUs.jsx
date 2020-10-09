import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
export default function FindUs() {
	return (
		<>
			<Container className="bg-dark text-center text-light p-2" fluid>
				<h4 className="m-0 p-1">Find Us</h4>
			</Container>
			<Container className="p-3">
				<Row>
					<Col md={8} className="mb-3">
						<h1
							className="display-4 mb-3"
							style={{ fontSize: "2rem" }}
						>
							Google Map
						</h1>
						<div
							className="bg-secondary w-100"
							style={{ height: 450 }}
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6840819110766!2d151.22078341574533!3d-33.87203172665898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae72b389a571%3A0xccdfb3dfcae3102e!2sPotts%20Point%20Laundry!5e0!3m2!1sen!2sau!4v1598930367650!5m2!1sen!2sau"
								className="w-100 h-100 border-0"
							/>
						</div>
					</Col>
					<Col md={4} className="mb-3">
						<Row className="text-center">
							<Col xs={12} className="mb-3">
								<h1
									className="display-4 mb-3 d-flex align-items-center justify-content-center"
									style={{ fontSize: "2rem" }}
								>
									<LocationOnIcon
										fontSize="inherit"
										className="mr-2"
									/>
									Find Us
								</h1>
								<p>138 Victoria Street, Potts Point NSW 2011</p>
							</Col>
							<Col xs={12} className="mb-3">
								<h1
									className="display-4 mb-3 d-flex align-items-center justify-content-center"
									style={{ fontSize: "2rem" }}
								>
									<PhoneIcon
										fontSize="inherit"
										className="mr-2"
									/>
									Contact Us
								</h1>
								<p>
									Phone:{" "}
									<a href="tel:+0293573660">(02) 9357 3660</a>
								</p>
							</Col>
							<Col xs={12} className="mb-3">
								<h1
									className="display-4 mb-3 d-flex align-items-center justify-content-center"
									style={{ fontSize: "2rem" }}
								>
									<AccessTimeIcon
										fontSize="inherit"
										className="mr-2"
									/>
									Opening Hours
								</h1>
								<p>
									Monday - Friday: 7am - 9pm <br /> Saturday -
									Sunday: 8am - 9pm <br /> Last Wash 8pm
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
}
