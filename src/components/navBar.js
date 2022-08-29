import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const CustomNavBar = () => {
  const navigate = useNavigate();

  const handlenavigate = (e, to) => {
    e.preventDefault()
    navigate(to)
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" onClick={event => handlenavigate(event, "/")}>Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={event => handlenavigate(event, "/contact")}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavBar;