
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { user, logout } = props
    return (
        <Navbar bg="light" expand="xlg">
            <Container>
                <Link to="/"><h2>🔨 How to handy</h2></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">Home</Link>
                        {!user && <Link to="/register">Register</Link>}
                        <Link to="/AddInstructionGuide" className='btn btn-danger '>Add</Link>
                        {!user && <Link to="/login" className='btn btn-success '>Login</Link>}
                        {user && <Button className='btn btn-warning ' onClick={() => { logout() }}>Logout</Button>}
                        {user && "Welcome " + user.user.email}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
export default Header
