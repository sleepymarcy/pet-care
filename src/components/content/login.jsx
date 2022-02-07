import { Route } from "react-router-dom";
import path from "./path";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Login() {

    return (
        <Route path={path.login}>
            <Container style={{ padding: "5rem 20rem" }}>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="submit-btn">
                        <Button type="submit" className="btn-color">Log In</Button>
                    </Form.Group>
                </Form>

            </Container>
        </Route>
    );
}

export default Login;