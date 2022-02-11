import {
    Navbar,
    Nav
} from "react-bootstrap"

import path from "./content/path"

function myNavbar() {
    return (
        <Navbar className="Navbar" expand="lg">
            <Navbar.Brand href="/">PetCare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={path.home}>Home</Nav.Link>
                    <Nav.Link href={path.pets}>Pets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default myNavbar;