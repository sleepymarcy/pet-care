import { Route } from "react-router-dom";
import path from "./path";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

// import { GoogleMap, LoadScript } from '@react-google-maps/api';

function NewVet() {

    // const API_KEY = process.env.GOOGLE_MAPS_API;

    return (
        <Route path={path.new_vet}>
            <Container style={{ padding: "5rem 0rem" }}>

                <Form>

                    <Form.Group as={Row} className="mb-3 justify-content-center" style={{ margin: "auto" }}>
                        <Form.Label column sm={2}>
                            Clinic Name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 justify-content-center" style={{ margin: "auto" }}>
                        <Form.Label column sm={2}>
                            Veterinarian Name
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 justify-content-center" style={{ margin: "auto" }}>
                        <Form.Label column sm={2}>
                            Phone
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 justify-content-center" style={{ margin: "auto" }}>
                        <Form.Label column sm={2}>
                            E-Mail
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 justify-content-center" style={{ margin: "auto" }}>
                        <Form.Label column sm={2}>
                            Address
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control />
                        </Col>
                    </Form.Group>
                    {/* 
                    <LoadScript API_KEY >
                        <GoogleMap
                            google={this.props.google}
                            zoom={8}
                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                        />
                    </LoadScript> */}
                    <Col sm={8} style={{ margin: "auto" }}>
                        <Form.Group className="submit-btn">
                            <Button type="submit" className="btn-color">Save</Button>
                        </Form.Group>
                    </Col>

                </Form>
            </Container>
        </Route>
    );
}

export default NewVet;