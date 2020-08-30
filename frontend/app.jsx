import React from 'react';

import { Container, Jumbotron, Button } from 'react-bootstrap'
// Import components
import NavigationBar from './components/NavigationBar.jsx'

export default function App() {
    return (
        <>
            <NavigationBar />

            <Jumbotron fluid className="home_banner">
                <Container className="py-5">
                    <h1 className="text-light text-black-outline ">Like Laundry. Like Never Before.</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>
                        <Button variant="primary">Find Us</Button>
                    </p>
                </Container>
            </Jumbotron>

        </>
    )
}