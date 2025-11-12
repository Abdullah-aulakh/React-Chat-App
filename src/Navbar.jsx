import { Container,Navbar,Nav } from "react-bootstrap";

const TopNavbar = () => {
  return (
   <Navbar bg="primary" variant="dark" expand="md" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand href="#">Chat App</Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default TopNavbar;