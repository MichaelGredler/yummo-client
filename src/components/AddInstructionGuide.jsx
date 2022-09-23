import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const AddInstructionGuide = (props) => {
    const { history } = props
    const [instructionGuides, setInstructionGuides] = useState()

    const onTextChange = (e) => {
        setInstructionGuides({ ...instructionGuides, [e.target.name]: e.target.value })
    }

    const onMessageSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:8081/instructionGuides`, instructionGuides)
        history.push('/');
    }

    return (
        <Container>
            <Form className="mt-2" onSubmit={onMessageSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={instructionGuides && instructionGuides.title} name="title" onChange={e => onTextChange(e)} />
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={instructionGuides && instructionGuides.author} name="author" onChange={e => onTextChange(e)} />
                    <Form.Label>category</Form.Label>
                    <Form.Control type="text" value={instructionGuides && instructionGuides.category} name="category" onChange={e => onTextChange(e)} />
                    <Form.Label>image</Form.Label>
                    <Form.Control type="text" value={instructionGuides && instructionGuides.image} name="image" onChange={e => onTextChange(e)} />
                    <Form.Label>youtubeId</Form.Label>
                    <Form.Control type="text" value={instructionGuides && instructionGuides.youtubeId} name="youtubeId" onChange={e => onTextChange(e)} />
                    <Form.Label>equipment</Form.Label>
                    <Form.Control type="text" value={instructionGuides && instructionGuides.equipment} name="equipment" onChange={e => onTextChange(e)} />
                    <Form.Label>instructions</Form.Label>
                    <Form.Control as="textarea" rows={3} value={instructionGuides && instructionGuides.instructions} name="instructions" onChange={e => onTextChange(e)} />
                    <Button variant="primary" type="submit" className="w-100 mt-1">
                        Submit Edit
                    </Button>
                </Form.Group>
            </Form>
        </Container>

    )
}
export default AddInstructionGuide
