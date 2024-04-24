import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from "../imgs/logo.jpg"

export const NavBar = ({ search }) => {
    const onsearch = (word) => {
        search(word)
    }
    return (
        <div className="backgroundColorNav">
            <Container>
                <Row>
                    <Navbar className=" justify-content-between">
                        <Col md={2}>
                            <a href='/'>
                                <Navbar.Brand >
                                    <img
                                        src={logo}
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                            </a>

                        </Col>
                        <Col md={10}>
                            <Form inline onChange={(e) => { onsearch(e.target.value) }} >
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"

                                />
                            </Form>
                        </Col>

                    </Navbar>
                </Row>

            </Container>
        </div>
    )
}
