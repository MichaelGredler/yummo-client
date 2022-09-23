import React, {Fragment} from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsPersonCircle } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import styled from 'styled-components';
import logo from '../../yummo-logo-white.svg';
import Search from './Search'

// Component-level styles
const NavbarContainer = styled.div`
     /* background: rgb(40,40,112); */
    background: linear-gradient(14deg, rgb(40,40,112) 0%, rgb(80,40,112) 50%, rgb(110,50,120) 100%); 
    padding: 0.5rem 0;
    margin-bottom: 5rem;
    /* display: flex; */
    /* z-index: 99999; */
`;

const Avatar = styled.div`
    color: #ffffff;
    font-size: 2.5rem;
    line-height: 1em;
`




const Header = (props) => {
    const { userState, logout, likeSearch, query, onChange, } = props
    return (
        <Fragment>
            <NavbarContainer>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                    <Navbar.Brand href="/"><img src={logo} className="yummo-logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-left">
                        {userState &&
                            <NavDropdown title="My Recipes" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/likes">Liked Recipes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => {alert("This feature is coming soon!")}}>Add a Recipe</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {alert("This feature is coming soon!")}}>Edit a Recipe</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {alert("This feature is coming soon!")}}>Delete a Recipe</NavDropdown.Item>
                            </NavDropdown>
                        }
                        {userState && <Button className="plus-icon-btn" href="/comingsoon" >{<span><HiPlus></HiPlus></span>}Add A Recipe</Button>}

                        </Nav>
                        <Nav className="nav-right">
                            {!userState && <Button href="/login" className="nav-btns">Login</Button>}
                            {!userState && <Button href="/register" className="nav-btns">Register</Button>}
                            {userState &&
                                <NavDropdown title={<Avatar><BsPersonCircle className="person-icon"/></Avatar>} id="collasible-nav-dropdown" className="profile-dropdown">
                                    <NavDropdown.Item>Welcome {userState.user.email}</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={() => {alert("This feature is coming soon!")}}>Account Settings</NavDropdown.Item>
                                    <NavDropdown.Item><Button onClick={() => { logout() }} className="logout-btn">Logout</Button></NavDropdown.Item>
                                </NavDropdown>
                            }
                        </Nav>
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </NavbarContainer>
        </Fragment>
    )
}
export default Header
