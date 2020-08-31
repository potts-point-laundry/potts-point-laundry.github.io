import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';;
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GoogleButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CardUseStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
    },
    media: {
        height: 140,
    },
});

export default function Home() {
    const cardStyle = CardUseStyles()
    return (
        <>
            <Jumbotron fluid className="home_banner d-flex align-items-center">
                <Container className="text-center">
                    <h3 className="text-light text-black-outline mb-2">Like Laundry. Like Never Before.</h3>
                    <Button variant="primary" className="home-banner-button web-theme-bg-color d-flex justify-content-center mx-auto"><ArrowBackIosIcon /><span className="mx-2">Find Us</span><ArrowForwardIosIcon /></Button>
                </Container>
            </Jumbotron>
            <Container>
                <Row className="d-flex">
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <Card className={cardStyle.root}>
                            <CardMedia
                                className={cardStyle.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Affordable Services</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sed et aliquam erat.
                                    Ut at vehicula justo. Suspendisse eu laoreet mauris. Integer efficitur lacus vitae ante
                                    molestie sollicitudin. Cras in convallis orci. Aenean eget dolor a lorem dignissim vehicula.
                                    Ut euismod metus eget leo vestibulum pretium.
                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <GoogleButton size="small" color="primary">Learn More</GoogleButton>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <Card className={cardStyle.root}>
                            <CardMedia
                                className={cardStyle.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">7 Days a Week</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sed et aliquam erat.
                                    Ut at vehicula justo. Suspendisse eu laoreet mauris. Integer efficitur lacus vitae ante
                                    molestie sollicitudin. Cras in convallis orci. Aenean eget dolor a lorem dignissim vehicula.
                                    Ut euismod metus eget leo vestibulum pretium.
                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <GoogleButton size="small" color="primary">Learn More</GoogleButton>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <Card className={cardStyle.root}>
                            <CardMedia
                                className={cardStyle.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">4+ Star Reviews</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Sed et aliquam erat.
                                    Ut at vehicula justo. Suspendisse eu laoreet mauris. Integer efficitur lacus vitae ante
                                    molestie sollicitudin. Cras in convallis orci. Aenean eget dolor a lorem dignissim vehicula.
                                    Ut euismod metus eget leo vestibulum pretium.
                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <GoogleButton size="small" color="primary">Learn More</GoogleButton>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={4}>
                        1
                    </Col>
                    <Col md={8}>
                        2
                    </Col>
                </Row>
            </Container>
        </>
    )
}