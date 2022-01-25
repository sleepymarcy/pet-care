import { Route } from "react-router-dom";
import path from "./path";

import { useState } from 'react';

import { Card, Container, Row, Col, Figure, Button } from "react-bootstrap";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import nela from '../assets/nelka.png'
import kicia from '../assets/Kicia.png'
import mysza from '../assets/Mysza.jpg'
import robka from '../assets/Robka.jpg'


function Home() {

    const [value, onChange] = useState(new Date());

    return (
        <Route path exact={path.home}>

            <Container>
                <Row>
                    <Col className="p-3">
                        <Card>
                            <Card.Header className="header" as="h5">Pets</Card.Header>
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
                                        <Button variant="none">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={nela} roundedCircle />
                                                <Figure.Caption>Nela</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Button variant="none">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={mysza} roundedCircle />
                                                <Figure.Caption>Mysza</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                    <Col xs={6} md={3}>
                                        <Button variant="none">
                                            <Figure>
                                                <Figure.Image className="pet-picture" src={robka} roundedCircle />
                                                <Figure.Caption>Robie</Figure.Caption>
                                            </Figure>
                                        </Button>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-3">
                        <Card>
                            <Card.Header className="header" as="h5">Vets</Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col className="p-3">
                        <Card>
                            <Card.Header className="header" as="h5" >Appointments</Card.Header>
                            <Card.Body>

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