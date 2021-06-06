import React from 'react'
import {Card} from 'react-bootstrap';

function ProjectCard(props) {
    console.log(props.props);

    return (
        <Card style={{ width: '70vw' }} className='m-2'>
            <Card.Body>
                <Card.Img variant="top" src={(props.props.image)} />
                <Card.Title className='mt-2'>{props.props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.props.tech}</Card.Subtitle>
                <Card.Text>
                {props.props.description}
                </Card.Text>
                <Card.Link href={props.props.link} target="_blank">Live App</Card.Link>
                <Card.Link href={props.props.github} target="_blank">Github Repo</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;