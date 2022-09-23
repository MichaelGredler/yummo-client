import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Joi from 'joi';

const Register = (props) => {
    const { history, saveUser } = props;
    const [user, setUser] = useState({ email: '', password: '' }); // State for user data
    const [errors, setErrors] = useState({ email: '', password: '' }); // State for client-based errors
    const [serverErrors, setServerErrors] = useState({ error: '' }); // State for server-based errors

    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')),
    });
    // A scheme defines what is valid data for Joi.

    function validate(data) {
        const options = { abortEarly: false }; // This tells Joi not to stop at the first error but check everything
        const result = schema.validate(data, options); // Check the data against the schema
        if (!result.error) return {}; // If there is no error stop here

        const errors = {};
        result.error.details.map((item) => {
            return (errors[item.path[0]] = item.message);
        }); // Loop over errors and save messages into the errors object
        console.log(errors);
        return errors;
    };
    // This function checks the data the user entered against the schema

    const onTextChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onMessageSubmit = async (e) => {
        e.preventDefault();
        const errorsData = validate(user); // Validate the data saved into the user state
        console.log(errorsData);
        setErrors(errorsData); // Then save the resulting errors into the errors state
        if (!errorsData === {}) {
            return;
        }
        try {
            let response = await axios.post(`http://localhost:8081/register`, user); // Sends username and password, gets back login details
            saveUser(response.data)
            history.push('/');
        } catch (error) {
            console.log(error.response.data);
            setServerErrors(error.toJSON()); // Saves any server errors to the serverErrors state which will then be displayed on the page

        }
    }

    return (
        <Container>
            <Form className="mt-2" onSubmit={onMessageSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={user && user.email} name="email" onChange={e => onTextChange(e)} />
                    {'email' in errors ? <Form.Text className="text-danger">{errors.email}</Form.Text> : null}
                    <Form.Label className="d-block">Password</Form.Label>
                    <Form.Control type="password" value={user && user.password} name="password" onChange={e => onTextChange(e)} />
                    {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                    <Button variant="primary" type="submit" className="w-100 mt-1">
                        Login
                    </Button>
                    {serverErrors && <Form.Text className="text-danger">{serverErrors.error}</Form.Text>}
                </Form.Group>
            </Form>
        </Container>

    )
}
export default Register
