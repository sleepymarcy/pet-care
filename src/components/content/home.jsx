import { Route } from "react-router-dom";
import path from "./path";

import { useState } from 'react';

import { Card, Container, Row, Col } from "react-bootstrap";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


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
                                {/* <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text> */}
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