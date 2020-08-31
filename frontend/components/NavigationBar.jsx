import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

export default function NavigationBar({bg="dark", variant="dark"}) {

    return (
        <Navbar collapseOnSelect expand="lg" bg={bg} variant={variant} className="web-theme-bg-color">
            <Container>
                <Navbar.Brand href="/" className="nav-brand">Potts Point Laundry & Dry Cleaning</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/services">SERVICES</Nav.Link>
                        <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
                        <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                        <Nav.Link href="/findus">FIND US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}