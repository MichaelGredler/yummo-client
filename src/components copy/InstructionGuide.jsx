import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const InstructionGuide = (props) => {
    const { match } = props
    let id = match.params.id;
    const [instructionGuides, setInstructionGuides] = useState()

    useEffect(() => {
        async function loadInstructionGuide() {
            let response = await axios.get(`http://localhost:8081/instructionguides/${id}`) // Gets the recipe that has the same id
            setInstructionGuides(response.data)
        }
        loadInstructionGuide()
    }, [id]);

    return (
        <Container>
            <img src={instructionGuides && instructionGuides.image} className="w-100" alt={instructionGuides && instructionGuides.title} />
            <h1>{instructionGuides && instructionGuides.title}</h1>
            <p><b>author: </b>{instructionGuides && instructionGuides.author}</p>
            <p><b>category: </b>{instructionGuides && instructionGuides.category}</p>
            <p><b>equipment: </b>{instructionGuides && instructionGuides.equipment}</p>
            <p><b>instructions: </b>{instructionGuides && instructionGuides.instructions}</p>
            <div className="video-responsive">
                <iframe
                    width="100%"
                    height="300"
                    src={instructionGuides && `https://www.youtube.com/embed/${instructionGuides.youtubeId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </Container>

    )
}
export default InstructionGuide
