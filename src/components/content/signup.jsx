import { Route, Link } from "react-router-dom";
import path from "./path";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Signup() {

    return (
        <Route path={path.signup}>
            <Container style={{ padding: "5rem 0rem" }}>
                <Form>

                    <Col xs={4} style={{ margin: "auto" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>

                    <Col xs={4} style={{ margin: "auto" }}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>

                    <Col xs={4} style={{ margin: "auto" }}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>

                    <Col xs={4} style={{ margin: "auto" }}>
                        <Form.Group className="submit-btn">
                            <Button type="submit" className="btn-color">Sign Up</Button>
                        </Form.Group>
                    </Col>

                    <br />
                    <br />
                    <br />

                    <Col xs={4} style={{ margin: "auto" }}>
                        <Row className="justify-content-md-center" >
                            <Col xs lg="7" style={{ paddingRight: '0' }}>Already have an account?</Col>
                            <Col xs lg="4" style={{ paddingLeft: '0' }}><Link to="/login" className="links">Log In here!</Link></Col>
                        </Row>
                    </Col>

                </Form>
            </Container>
        </Route>
    );
}

export default Signup;