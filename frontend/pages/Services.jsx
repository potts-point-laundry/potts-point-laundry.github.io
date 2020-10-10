import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function Services() {
	const [services_data, setServiceData] = useState(null);

	useEffect(() => {
		axios.get("/api/pricing.json").then((response) => {
			setServiceData(response.data);
		});
	}, []);

	return (
		<>
			<Container className="bg-dark text-center text-light p-2" fluid>
				<h4 className="m-0 p-1">Our Services</h4>
			</Container>
			<Container className="my-4">
				<Row>
					<Col md={4} className="mb-4">
						<img
							src={service1}
							alt="table"
							className="mb-3 mx-auto d-block unselectable"
						/>
						<h3 className="text-center">Laundry Service</h3>
						<h5 className="text-center font-weight-normal">
							Always Prepared
						</h5>
						<TableContainer component={Paper}>
							<Table
								size="small"
								aria-label="Laundry Service Table"
							>
								<TableHead>
									<TableRow className="bg-dark">
										<TableCell className="text-light">
											Services
										</TableCell>
										<TableCell
											className="text-light"
											align="right"
										>
											Pricing
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{services_data &&
										services_data.laundry.map((each, i) => {
											return (
												<TableRow key={i}>
													<TableCell
														component="th"
														scope="row"
													>
														{each.name} <br />{" "}
														<span className="text-muted">
															{each.description}
														</span>
													</TableCell>
													<TableCell align="right" className="pl-0">
														{each.price}
													</TableCell>
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						</TableContainer>
					</Col>
					<Col md={4} className="mb-4">
						<img
							src={service2}
							alt="table"
							className="mb-3 mx-auto d-block unselectable"
						/>
						<h3 className="text-center">Pressing Service</h3>
						<h5 className="text-center font-weight-normal">
							Attention to Detail
						</h5>
						<TableContainer component={Paper}>
							<Table
								size="small"
								aria-label="Laundry Service Table"
							>
								<TableBody>
									<TableRow>
										<TableCell
											align="center"
											colSpan={2}
											className="bg-dark text-light"
										>
											Iron Only (per garment)
										</TableCell>
									</TableRow>
									{services_data &&
										services_data.pressing.iron_only.map(
											(each, i) => {
												return (
													<TableRow key={i}>
														<TableCell
															component="th"
															scope="row"
														>
															{each.name}
														</TableCell>
														<TableCell align="right">
															{each.price}
														</TableCell>
													</TableRow>
												);
											}
										)}
									<TableRow>
										<TableCell
											align="center"
											colSpan={2}
											className="bg-secondary text-light"
										>
											Wash and Iron (per garment)
										</TableCell>
									</TableRow>
									{services_data &&
										services_data.pressing.wash_and_iron.map(
											(each, i) => {
												return (
													<TableRow key={i}>
														<TableCell
															component="th"
															scope="row"
														>
															{each.name}
														</TableCell>
														<TableCell align="right">
															{each.price}
														</TableCell>
													</TableRow>
												);
											}
										)}
								</TableBody>
							</Table>
						</TableContainer>
					</Col>
					<Col md={4} className="mb-4">
						<img
							src={service3}
							alt="table"
							className="mb-3 mx-auto d-block unselectable"
						/>
						<h3 className="text-center">Dry Cleaning</h3>
						<h5 className="text-center font-weight-normal">
							Expert Service
						</h5>
						<TableContainer component={Paper}>
							<Table
								size="small"
								aria-label="Laundry Service Table"
							>
								<TableHead>
									<TableRow className="bg-dark">
										<TableCell className="text-light">
											Services
										</TableCell>
										<TableCell
											className="text-light"
											align="right"
										>
											Pricing
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{services_data &&
										services_data.dry_cleaning.map(
											(each, i) => {
												return (
													<TableRow key={i}>
														<TableCell
															component="th"
															scope="row"
														>
															{each.name} <br />{" "}
															<span className="text-muted">
																{
																	each.description
																}
															</span>
														</TableCell>
														<TableCell align="right">
															{each.price}
														</TableCell>
													</TableRow>
												);
											}
										)}
								</TableBody>
							</Table>
						</TableContainer>
					</Col>
				</Row>
			</Container>
		</>
	);
}
