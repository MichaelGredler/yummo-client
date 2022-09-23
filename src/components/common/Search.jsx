import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

// This is not a page so it's been put into a folder called "common"
// onChange has been passed here from InstructionGuides.jsx
// When the user types into the text box created by the Form.Control component the value is passed into the onChange method
// (originally onQueryChange from App.js)

const Search = (props) => {
    const { query, onChange } = props

    return (
        <Container>
            <Form>
                <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Search" value={query} onChange={(e) => { onChange(e.target.value) }} />
                </Form.Group>
            </Form>
        </Container>
    )
}
export default Search
