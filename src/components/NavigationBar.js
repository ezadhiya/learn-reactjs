import { Nav, Navbar, Container } from 'react-bootstrap'

const NavigationBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Coba</Navbar.Brand>
        <Nav>
          <Nav.Link>Beranda</Nav.Link>
          <Nav.Link>Galeri</Nav.Link>
          <Nav.Link>Tentang</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
}

export default NavigationBar