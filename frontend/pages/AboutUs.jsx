import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap'

import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'

const image_list = [gallery1, gallery2, gallery3]

export default function AboutUs() {
    return (
        <>
            <Container className="bg-dark text-center text-light p-2" fluid><h4 className="m-0 p-1">About Us</h4></Container>
            <Container className="my-4">
                <Carousel interval={null} className="mb-4">

                    {
                        image_list.map((each, i) => {
                            return (
                                <Carousel.Item key={i}>
                                    <img src={each} alt="gallery" className="d-block mx-auto" style={{ height: 500, objectFit: "contain" }} />
                                </Carousel.Item>
                            )
                        })
                    }

                </Carousel>

                <Row>
                    <Col md={6}>
                        <h5 className="text-center">Reliable Laundry and Dry-Cleaning Service</h5>
                        <p>Over the past decade, we have developed multiple laundry services targeted to both personal and commercial services.
                            We've learned that excellent service begins and ends with experienced and friendly professionals who explain our rigorous laundry service. </p>
                    </Col>
                    <Col md={6}>
                        <h5 className="text-center">Our Laundromat</h5>
                        <p>Potts Point Laundry & Dry Cleaning is bright and spacious in terms of spaces, which has over 20 washing machines & 12 dryers available for customers to use.
                            With staffed service, we finish each order on schedule and with the highest level of quality, having a focus on personalised service, competitive rates and customer satisfaction. <br />We are always striving to meet and exceed expectations.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}