import React from "react"; // Import React for functional components
import { Link, Routes, Route } from "react-router-dom"; // Import React Router components for navigation
import Home from "../Home"; // Import Home component for the homepage route
import AboutMe from "../AboutMe"; // Import AboutMe component (the correct component for the about page)
import Contact from "../Contact"; // Import Contact component for the contact route
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 14

function Day14() {
  return (
    <div className="day-container"> {/* Main container for Day 14 challenge */}
      <h1>Day 14 - React Router Basics</h1> {/* Title for the challenge */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 6, 2024" // Date of the challenge
        dayNumber="Day 14" // Current day number
        challenge="Set up and use React Router" // Description of the challenge
        message="Implement routing in React!" // Message for the challenge
      />

      {/* Navigation links for the different routes */}
      <nav>
        <ul>
          <li>
            {/* Link component for navigating to the Home route */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Link component for navigating to the About Me route */}
            <Link to="/about">About Me</Link>
          </li>
          <li>
            {/* Link component for navigating to the Contact route */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Routes component to define different paths for the app */}
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the About Me page, using the correct AboutMe component */}
        <Route path="/about" element={<AboutMe />} />

        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Day14;