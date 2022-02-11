import { Route, Link } from "react-router-dom";
import path from "./path";

import { useState } from 'react';

import { Card, Container, Row, Col, Figure, Button, ListGroup } from "react-bootstrap";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import nela from '../assets/nelka.png';
import kicia from '../assets/Kicia.png';
import mysza from '../assets/Mysza.jpg';
import batman from '../assets/batman.jpg';
import logo from '../assets/logo.png';
import { AiFillPlusCircle } from 'react-icons/ai';


function Home() {

    const [value, onChange] = useState(new Date());

    return (
        <Route path exact={path.home}>

            <Container>
                <Row>
                    <Col className="p-3">
                        <Card>
                            <Card.Header as="h5" className="header">
                                Pets
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={6} md={3}>
                                        <Button variant="none">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={kicia} roundedCircle />
                                                <Figure.Caption>Kicia</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Button variant="none" className="btn-home">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={nela} roundedCircle />
                                                <Figure.Caption>Nela</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Button variant="none" className="btn-home">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={mysza} roundedCircle />
                                                <Figure.Caption>Mysza</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Button variant="none" className="btn-home">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={batman} roundedCircle />
                                                <Figure.Caption>Batman</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>

                                        <Link to={path.new_pet}>
                                            <Button variant="none" className="btn-home">
                                                <Figure>
                                                    <AiFillPlusCircle className="pet-picture add" style={{ margin: '0px 0px 8px' }} />
                                                    <Figure.Caption>Add new</Figure.Caption>
                                                </Figure>
                                            </Button>
                                        </Link>

                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-3">
                        <Card>
                            <Card.Header className="header" as="h5">Vets</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col xs={6} md={3}>
                                        <Button variant="none" className="btn-home">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={logo} roundedCircle />
                                                <Figure.Caption>Vet #1</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Button variant="none" className="btn-home">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={logo} roundedCircle />
                                                <Figure.Caption>Vet #2</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>

                                        <Link to={path.new_vet}>
                                            <Button variant="none" className="btn-home">
                                                <Figure>
                                                    <AiFillPlusCircle className="pet-picture add" style={{ margin: '0px 0px 8px' }} />
                                                    <Figure.Caption>Add new</Figure.Caption>
                                                </Figure>
                                            </Button>
                                        </Link>
                                        
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className="p-3">
                        <Card>
                            <Card.Header className="header" as="h5" >Appointments</Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>20/02 Nelas EKG</ListGroup.Item>
                                    <ListGroup.Item>24/02 Kicias check up</ListGroup.Item>
                                    <ListGroup.Item>15/03 Deworming meds for everybody</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-3">
                        <Card>
                            <Card.Header className="header" as="h5">Calendar</Card.Header>
                            <Card.Body>
                                <Calendar
                                    className="calendar"
                                    onChange={onChange}
                                    value={value}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Route>
    );
}

export default Home;