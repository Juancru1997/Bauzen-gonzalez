import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bauzen Cerveza</Navbar.Brand>
          <Nav className="navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="./Products">Products</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
