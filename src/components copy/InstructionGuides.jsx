import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Search from './common/Search'
import { Link } from 'react-router-dom';

const InstructionGuides = (props) => {
    const { instructionGuides, query, onChange, user } = props

    // The onQueryChange function has been passed to us from App.js and is deconstructed from the props
    // It's then passed into our Search component

    return (
        <React.Fragment>
            <Search query={query} onChange={onChange}></Search>
            <Container>
                <div className="row">
                    {instructionGuides && instructionGuides.map((instructionGuide) => (
                        <div className="col-lg-4 col-sm-6 col-12 py-2" key={instructionGuide.id}>

                            <Card>
                                <Card.Img variant="top" src={instructionGuide.image} />
                                <Card.Body>
                                    <Card.Title>{instructionGuide.title}</Card.Title>
                                    <Card.Text>{instructionGuide.instructions}</Card.Text>
                                    <Card.Text><b>Category:</b>{instructionGuide.category}</Card.Text>
                                    <Card.Text><b>Equipment:</b>{instructionGuide.equipment}</Card.Text>

                                    <Link variant="success" className="w-50 btn btn-primary" to={`/instructionGuide/${instructionGuide.id}`}>View</Link>
                                    {user && <Link variant="warning" className="w-50 btn btn-warning" to={`/editinstructionGuide/${instructionGuide.id}`}>Edit</Link>}
                                </Card.Body>
                            </Card>

                        </div >
                    ))}
                </div >
            </Container >
        </React.Fragment >
    )
}
export default InstructionGuides
