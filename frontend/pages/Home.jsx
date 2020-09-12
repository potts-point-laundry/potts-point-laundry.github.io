import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { makeStyles } from '@material-ui/core/styles';

import CardHome from '../components/CardHome.jsx'

const CardUseStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        height: "100%",
    },
    media: {
        height: 150,
        backgroundSize: "fit"
    },
});

import googleReviewImage from '../images/googel_review.jpg'
import severDaysImage from '../images/7days.jpg'
import startingImage from '../images/starting.jpg'

export default function Home() {
    const cardStyle = CardUseStyles()
    return (
        <>
            <Jumbotron fluid className="home_banner d-flex align-items-center m-0">
                <Container className="text-center">
                    <h3 className="text-light text-black-outline mb-3">Like Laundry. Like Never Before.</h3>
                    <Button variant="primary" className="home-banner-button web-theme-bg-color mx-auto d-flex justify-content-center align-items-center" href="/findus" style={{ width: 150 }}><ArrowBackIosIcon /><span className="mx-2">Find Us</span><ArrowForwardIosIcon /></Button>
                </Container>
            </Jumbotron>
            <Container className="my-4">
                <Row className="d-flex">
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <CardHome
                            image={startingImage}
                            link={"/services"}
                            title={"Affordable Services"}
                            cardStyle={cardStyle}
                        >
                            The rates at Potts Point Laundry & Dry Cleaning are unbeatable. We offer high-quality services while being affordable.
                            <br />
                            <br />
                            Come by and see it for yourself at <a className="text-primary" href="/findus">138 Victoria Street, Potts Point NSW 2011</a>.
                        </CardHome>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <CardHome
                            image={severDaysImage}
                            title={"7 Days a Week"}
                            link={"/findus"}
                            cardStyle={cardStyle}
                        >
                            Potts Point Laundry & Dry Cleaning open 7 days a week from 8 am to 8 pm. We'll make sure you get your laundry done!
                            <br />
                            <br />
                            Time may vary on public holidays.
                        </CardHome>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <CardHome
                            image={googleReviewImage}
                            link={"https://www.google.com/maps/place/Potts+Point+Laundry/@-33.8720317,151.2207834,17z/data=!4m7!3m6!1s0x6b12ae72b389a571:0xccdfb3dfcae3102e!8m2!3d-33.8720362!4d151.2229721!9m1!1b1"}
                            title={"4+ Star Reviews"}
                            cardStyle={cardStyle}
                            openNewTab={true}
                        >
                            Potts Point Laundry & Dry Cleaning have one of the highest review rating in Potts Point and Kings Cross.
                            <br />
                            <br />
                            We ensure our customers are happy and satisfy with our services.
                        </CardHome>
                    </Col>
                </Row>
            </Container>
        </>
    )
}