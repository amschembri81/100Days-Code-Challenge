import React from "react"; // Import React library
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import React Router components for routing
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'; // Import Apollo Client for GraphQL
import Home from "./components/Home"; // Import Home component
import AboutMe from "./components/AboutMe"; // Import AboutMe component
import Contact from "./components/Contact"; // Import Contact component
import WeatherDetails from "./components/WeatherDetails"; // Import the WeatherDetails component
import "./App.css"; // Import CSS styles for the app
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; // Import Bootstrap components for navigation
import Challenge1 from "./components/Week1/Challenge1"; // Import Week 1 Challenge component
import Challenge2 from "./components/Week2/Challenge2"; // Import Week 2 Challenge component
import Challenge3 from "./components/Week3/Challenge3"; // Import Week 3 Challenge component
import Challenge4 from "./components/Week4/Challenge4"; // Import Week 4 Challenge component
import Challenge5 from "./components/Week5/Challenge5"; // Import Week 5 Challenge component
import Challenge6 from "./components/Week6/Challenge6"; // Import Week 6 Challenge component
import Challenge7 from "./components/Week7/Challenge7"; // Import Week 7 Challenge component
import Challenge8 from "./components/Week8/Challenge8"; // Import Week 8 Challenge component
import Challenge9 from "./components/Week9/Challenge9"; // Import Week 9 Challenge component
import Challenge10 from "./components/Week10/Challenge10"; // Import Week 10 Challenge component


/*
import Challenge11 from "./components/Week11/Challenge11"; // Uncomment to include Week 11 Challenge component
import Challenge12 from "./components/Week12/Challenge12"; // Uncomment to include Week 12 Challenge component
import Challenge13 from "./components/Week13/Challenge13"; // Uncomment to include Week 13 Challenge component
import Challenge14 from "./components/Week14/Challenge14"; // Uncomment to include Week 14 Challenge component
import Challenge15 from "./components/Week15/Challenge15"; // Uncomment to include Week 15 Challenge component
*/

// Initialize Apollo Client for GraphQL
const client = new ApolloClient({
  uri: 'https://example-graphql-url.com/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(), // Use InMemoryCache for caching GraphQL responses
});

// Main App component
function App() {
  return (
    <ApolloProvider client={client}> {/* Provide Apollo Client to the app */}
      <Router> {/* Set up routing for the app */}
        <div className="App"> {/* Main app container */}
          <Navbar bg="dark" variant="dark" expand="lg"> {/* Bootstrap Navbar for navigation */}
            <Container>
              <Navbar.Brand as={Link} to="/"> {/* Link to Home */}
                Home
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
              <Navbar.Collapse id="basic-navbar-nav"> {/* Collapse navbar items on mobile */}
                <Nav className="me-auto"> {/* Navigation items */}
                  <Nav.Link as={Link} to="/about"> {/* Link to About page */}
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact"> {/* Link to Contact page */}
                    Contact
                  </Nav.Link>
                  <NavDropdown title="Challenges" id="basic-nav-dropdown"> {/* Dropdown for Challenges */}
                    <NavDropdown.Item as={Link} to="/challenge1"> {/* Link to Week 1 Challenge */}
                      Week 1
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge2"> {/* Link to Week 2 Challenge */}
                      Week 2
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge3"> {/* Link to Week 3 Challenge */}
                      Week 3
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge4"> {/* Link to Week 4 Challenge */}
                      Week 4
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge5"> {/* Link to Week 5 Challenge */}
                      Week 5
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge6"> {/* Link to Week 6 Challenge */}
                      Week 6
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge7"> {/* Link to Week 7 Challenge */}
                      Week 7
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge8"> {/* Link to Week 8 Challenge */}
                      Week 8
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge9"> {/* Link to Week 9 Challenge */}
                      Week 9
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/challenge10"> {/* Link to Week 9 Challenge */}
                      Week 10
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Define routes for the application */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home */}
            <Route path="/about" element={<AboutMe />} /> {/* Route for AboutMe */}
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
            <Route path="/challenge1" element={<Challenge1 />} /> {/* Route for Challenge 1 */}
            <Route path="/challenge2" element={<Challenge2 />} /> {/* Route for Challenge 2 */}
            <Route path="/challenge3" element={<Challenge3 />} /> {/* Route for Challenge 3 */}
            <Route path="/challenge4" element={<Challenge4 />} /> {/* Route for Challenge 4 */}
            <Route path="/challenge5" element={<Challenge5 />} /> {/* Route for Challenge 5 */}
            <Route path="/challenge6/*" element={<Challenge6 />} /> {/* Route for Challenge 6 */}
            <Route path="/challenge7/*" element={<Challenge7 />} /> {/* Route for Challenge 7 */}
            <Route path="/weather/:zipCode" element={<WeatherDetails />} /> {/* Route for WeatherDetails with ZIP code parameter */}
            <Route path="/challenge8/*" element={<Challenge8 />} /> {/* Route for Challenge 8 */}
            <Route path="/challenge9/*" element={<Challenge9 />} /> {/* Route for Challenge 9 */}
            <Route path="/challenge10/*" element={<Challenge10 />} /> {/* Route for Challenge 9 */}

          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App; // Export the App component for use in index.js
