import { Route } from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import path from "./path";

import { Container, Form, Button, Row, Col } from "react-bootstrap"

function NewPet() {


    const [startDate, setStartDate] = useState(new Date());

    async function fetchBreeds() {
        try {
            let response = await fetch("https://dog.ceo/api/breeds/list/all")
            if (response.ok) {
                let breeds = await response.json()
                this.setState({ data: breeds })
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <Route path={path.new_pet}>
            <Container style={{ padding: "5rem 10rem" }}>

                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Picture
                        </Form.Label>
                        <Col sm={10} controlId="formFile" >
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Date of birth
                        </Form.Label>
                        <Col sm={10}>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Species
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select aria-label="Default select example">
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Rat</option>
                                <option>Mouse</option>
                                <option>Rabbit</option>
                                <option>Guinea Pig</option>
                                <option>Hamster</option>
                                <option>Chinchilla</option>
                                <option>Ferret</option>
                                <option>Hedgehog</option>
                                <option>Lizard</option>
                                <option>Turtle</option>
                                <option>Snake</option>
                                <option>Bird</option>
                                <option>Fish</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Breed
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Select aria-label="Default select example">
                                <option></option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Sex
                            </Form.Label>
                            <Col sm={10} className="col-form-label">
                                <Form.Check inline label="Male" name="group1" type="radio" />
                                <Form.Check inline label="Female" name="group1" type="radio" />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Neutered
                            </Form.Label>
                            <Col sm={10} className="col-form-label">
                                <Form.Check inline label="Yes" name="group1" type="radio" />
                                <Form.Check inline label="No" name="group1" type="radio" />
                            </Col>
                        </Form.Group>
                    </fieldset>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Weight
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="kg" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Color
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="color" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Marking
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Microchip ID
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>
                            Notes
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Form.Group>


                    <Form.Group className="submit-btn">
                        <Button type="submit" className="btn-color">Save</Button>
                    </Form.Group>

                </Form>
            </Container>
        </Route>
    );
}

export default NewPet;