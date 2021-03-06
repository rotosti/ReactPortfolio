import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <Container className="p-4 d-flex justify-content-center">
            <Row style={{height: '60vh'}} className='d-flex align-items-center'>
                <Col>
                    <div className="d-flex justify-content-center flex-column text-center">
                        <h1>Hi, I'm Tom</h1>
                        <p>A recent fullstack web dev grad from Northwestern's Coding Bootcamp.</p>
                        <Link to='/contactme'><Button variant='dark'>Let's Talk</Button></Link>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Home;