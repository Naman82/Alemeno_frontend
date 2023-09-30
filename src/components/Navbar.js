import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">StripSpectrum</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="https://en.wikipedia.org/wiki/Urine_test_strip" target='_blank'>About</Nav.Link>
            <Nav.Link href="https://naman-goyal.vercel.app/" target='_blank'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default NavbarComponent;