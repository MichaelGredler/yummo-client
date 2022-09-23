import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
    const { history, saveUser } = props;
    // The onSaveUser function is deconstructed from App.js
    const [user, setUser] = useState({ email: '', password: '' })
    // State is created to store the user email and password

    const onTextChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    // This function receives the user input from the Form.Control components below.
    // We pull out the name (email) and the value (user's input) and it's saved into the user state

    const onMessageSubmit = async (e) => {
        e.preventDefault()
        let newUser = await axios.post(`http://localhost:8081/login`, user)
        console.log(newUser.data);
        saveUser(newUser.data)
        history.push('/');
    }
// When the user clicks submit, the data saved in the user state is sent to the server.
// The response from the server (the user's login details) is then passed into the saveUser method from App.js
// This saves it to local storage



    return (
        <Container>
            <h2>Add A Recipe</h2>
            <Form className="mt-2" onSubmit={onMessageSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={user && user.email} name="email" onChange={e => onTextChange(e)} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={user && user.password} name="password" onChange={e => onTextChange(e)} />
                    <Button variant="primary" type="submit" className="w-100 mt-1">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </Container>

    )
}
export default Login
