import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'

import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AddIcon from '@material-ui/icons/Add';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer() {
    return (
        <footer className="footer mt-auto">
            <Container fluid className="bg-dark text-light">
                <Container className="p-3">

                    <Accordion className="footer-nav mb-2">
                        <Card className="rounded-0 bg-dark border-secondary">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="border-secondary"><h4>Navigation <AddIcon className="float-right" fontSize="large" /></h4> </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Row className="text-center">
                                        <Col sm={12}><a href="/" className="text-light">Home</a></Col>
                                        <Col sm={12}><a href="/services" className="text-light">Services</a></Col>
                                        <Col sm={12}><a href="/aboutus" className="text-light">About Us</a></Col>
                                        <Col sm={12}><a href="/findus" className="text-light">Where to Find Us</a></Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Row>
                        <Col lg={10} className="p-0">
                            <Col sm={12}><h4>Potts Point Laundry & Dry Cleaning</h4></Col>
                            <Col sm={12}><p className="m-0"><LocationOnIcon /> <a href="https://goo.gl/maps/pwXK4ptWuu8Ezj5U6" className="text-light" target="_blank">138 Victoria Street, Potts Point NSW 2011</a></p></Col>
                            <Col sm={12}><p className="m-0"><PhoneIcon /> <a href="tel:+0293573660" className="text-light">(02) 9357 3660</a></p></Col>
                            <Col sm={12}><p className="m-0"><AccessTimeIcon /> Monday - Friday: 7am - 9pm | Last Wash 8pm</p></Col>
                            <Col sm={12}><p className="m-0"><AccessTimeIcon /> Saturday - Sunday: 8am - 9pm | Last Wash 8pm</p></Col>
                        </Col>
                        <Col lg={2} className="footer-nav-2">
                            <Row className="text-right">
                                <Col sm={12}><h4>Navigation</h4> </Col>
                                <Col sm={12}><a href="/" className="text-light">Home</a></Col>
                                <Col sm={12}><a href="/services" className="text-light">Services</a></Col>
                                <Col sm={12}><a href="/aboutus" className="text-light">About Us</a></Col>
                                <Col sm={12}><a href="/findus" className="text-light">Where to Find Us</a></Col>
                            </Row>
                        </Col>
                    </Row>

                    <p className="text-center w-100 copyright-text d-block m-0 mt-2"><CopyrightIcon /> {new Date().getFullYear()} Potts Point Laundry & Dry Cleaning. All Rights Reserved.</p>

                </Container>
            </Container>
        </footer>
    )
}