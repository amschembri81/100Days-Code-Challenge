import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Challenges from './components/Week1/Challenges';
import Challenges2 from './components/Week2/Challenges2';
import Challenges3 from './components/Week3/Challenges3';
import Challenges4 from './components/Week4/Challenges4';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <NavDropdown title="Challenges" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/challenges">Week 1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/challenges2">Week 2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/challenges3">Week 3</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/challenges4">Week 4</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/challenges2" element={<Challenges2 />} />
          <Route path="/challenges3" element={<Challenges3 />} />
          <Route path="/challenges4" element={<Challenges4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;