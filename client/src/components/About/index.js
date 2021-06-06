import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function About() {
    return (
        <Container className="p-4 d-flex justify-content-center">
                <Row style={{height: '40vh'}} className='d-flex align-items-center'>
                    <Col>
                        <div className="d-flex justify-content-center flex-column text-center">
                            <h1>About</h1>
                            <p className='p-5'>I completed my Associate's of Applied Science's in Software Development from College of DuPage in
                                Glen Ellyn, IL.  After, I graduated from Northwestern's Coding Bootcamp which focused on the MERN stack.
                                Skills include MongoDB, Express.js, React, Node.js, Javascript, HTML/CSS, Java, C++, Python.
                            </p>
                            
                        </div>
                    </Col>
                </Row>
        </Container>
        )
}

export default About;