import { Route, Link } from "react-router-dom";
import path from "./path";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Signup() {

    return (
        <Route path={path.signup}>
            <Container style={{ padding: "5rem 10rem" }}>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="submit-btn">
                        <Button type="submit" className="btn-color">Sign Up</Button>
                    </Form.Group>
                    <br/>
                    <br/>
                    <br/>
                    <Row style={{textAlign: 'center'}}>
                        <Col>Already have an account?</Col>
                        <Col><Link to="/login" className="links">Log In</Link></Col>
                    </Row>
                </Form>

            </Container>
        </Route>
    );
}

export default Signup;