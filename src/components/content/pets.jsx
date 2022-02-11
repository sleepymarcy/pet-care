import { Route, Link } from "react-router-dom";
import path from "./path"

import { Container, Figure, Button, Row, Col } from "react-bootstrap";

import nela from '../assets/nelka.png'
import kicia from '../assets/Kicia.png'
import mysza from '../assets/Mysza.jpg'
import batman from '../assets/batman.jpg'
// import logo from '../assets/logo.png'

import Plus from '../icons/plus.jsx'

function Pets() {
    return (
        <Route path={path.pets}>
            <Container style={{ padding: "5rem 0rem" }}>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Button variant="none">
                            <Figure>
                                <Figure.Image src={kicia} roundedCircle className="pets-pictures" />
                                <Figure.Caption className="caption">Kicia</Figure.Caption>
                            </Figure>
                        </Button>
                    </Col>

                    <Col xs={6} md={4}>
                        <Button variant="none" className="btn-home">
                            <Figure  className="justify-content-md-center">
                                <Figure.Image src={nela} roundedCircle className="pets-pictures" />
                                <Figure.Caption className="caption">Nela</Figure.Caption>
                            </Figure>
                        </Button>
                    </Col>

                    <Col xs={6} md={4}>
                        <Button variant="none" className="btn-home">
                            <Figure>
                                <Figure.Image src={mysza} roundedCircle className="pets-pictures" />
                                <Figure.Caption className="caption">Mysza</Figure.Caption>
                            </Figure>
                        </Button>
                    </Col>

                    <Col xs={6} md={4}>
                        <Button variant="none" className="btn-home">
                            <Figure>
                                <Figure.Image src={batman} roundedCircle className="pets-pictures" />
                                <Figure.Caption className="caption">Batman</Figure.Caption>
                            </Figure>
                        </Button>
                    </Col>

                    <Col xs={6} md={4}>

                        <Link to={path.new_pet}>
                            <Button variant="none" className="btn-home">
                                <Figure>
                                    <Plus style={{marginBottom: '8px'}} />
                                    <Figure.Caption className="caption">Add new</Figure.Caption>
                                </Figure>
                            </Button>
                        </Link>

                    </Col>

                </Row>
            </Container>
        </Route>
    );
}

export default Pets;