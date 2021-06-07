import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function ContactMe() {
    return (
        <Container className="p-4 d-flex justify-content-center">
                <Row style={{height: '50vh'}} className='d-flex align-items-center'>
                    <Col>
                        <div className="d-flex justify-content-center flex-column text-center">
                            <h1>Contact Me</h1>
                            <Form className='mt-5'>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name..." />
                                    <Form.Text className="text-muted">
                                    I don't share any information sent in the contact form.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your contact email.." />
                                </Form.Group>
                                <Form.Group controlId="formBasicTextArea">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder='Anything else I need to know?' rows={3} />
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
        </Container>
        )
}

export default ContactMe;