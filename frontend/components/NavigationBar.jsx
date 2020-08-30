import React, { useState } from 'react'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

export default function NavigationBar({bg="dark", variant="dark"}) {

    return (
        <Navbar collapseOnSelect expand="lg" bg={bg} variant={variant}>
            <Container>
                <Navbar.Brand href="/">Potts Point Laundry & Dry Cleaning</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link>SERVICES</Nav.Link>
                        <Nav.Link>ABOUT US</Nav.Link>
                        <Nav.Link>CONTACTS</Nav.Link>
                        <Nav.Link>FIND US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}