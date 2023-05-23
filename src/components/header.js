import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashRouter, Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Link className="text-decoration-none navbar-brand" to="/">
            React Practice
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
              {' '}
              <Link className="text-decoration-none nav-link" to="/">
                To Do List
              </Link>
              <Link className="text-decoration-none nav-link" to="/search">
                Search Photo
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;