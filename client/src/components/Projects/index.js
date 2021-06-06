import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import data from '../../assets/projectdata';
import ProjectCard from '../ProjectCard';

function Projects() {
    return (
    <Container className="p-4 d-flex justify-content-center">
            <Row style={{height: '20vh'}} className='d-flex align-items-center'>
                <Col>
                    <div className="d-flex justify-content-center flex-column text-center">
                        <h1 className='p-3'>Projects</h1>
                        {data.map((proj) => {
                            return <ProjectCard
                                       props={proj}
                                    />
                        })}
                    </div>
                </Col>
            </Row>
    </Container>
    )
}

export default Projects;