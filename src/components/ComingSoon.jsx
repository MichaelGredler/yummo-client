import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const ComingSoon = (props) => {
    const { recipeState, query, onChange, user } = props;


    return (
        <React.Fragment>
            <Container>
                <div >
                  <h1>Coming Soon</h1>
                </div >
            </Container >
        </React.Fragment >
    )
}
export default ComingSoon;
