import React from "react";
import { Route, Routes, Link } from "react-router-dom"; // Import necessary components from react-router-dom for routing
import DayInfoComponent from "../DayInfoComponent"; // Component to display day-specific information
import WeatherDetails from "../WeatherDetails"; // Component that shows detailed weather information for a location
import ErrorBoundary from "../ErrorBoundary"; // Component to catch and handle errors

function Day39({ weather, bgColor }) {
  const happyEmoji = "😊"; // Define emoji as a string

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 39 - Routing with React Router</h1> {/* Title for the challenge */}
      
      {/* Component displaying date, day number, challenge, and weather */}
      <DayInfoComponent
        date="August 31, 2024" // Display the current date
        dayNumber="Day 39" // Day number of the challenge
        challenge="Routing with React Router - Nested Routes" // Description of the challenge
        weather={weather} // Pass the weather prop
        happyEmoji={happyEmoji} // Pass the happy emoji
      />

      <p>Select a location below to view the weather details:</p> {/* Instruction for users */}

      {/* List of location links, each leading to a route with a specific ZIP code */}
      <ul className="location-links">
        <li>
          <Link to="/weather/10001">New York (10001)</Link> {/* Link to show weather details for New York */}
        </li>
        <li>
          <Link to="/weather/90210">Beverly Hills (90210)</Link> {/* Link to show weather details for Beverly Hills */}
        </li>
        <li>
          <Link to="/weather/94105">San Francisco (94105)</Link> {/* Link to show weather details for San Francisco */}
        </li>
      </ul>

      {/* ErrorBoundary wraps Routes to catch any errors within the routing */}
      <ErrorBoundary>
        <Routes>
          {/* Define the route for displaying weather details dynamically based on the ZIP code */}
          <Route path="weather/:zipCode" element={<WeatherDetails />} />
        </Routes>
      </ErrorBoundary>

      {/* Explanation section */}
      <div className="description-container">
        <h4 className="description">Description:</h4>
        <p>
          The challenge was solved by using React Router to implement nested routes, allowing the app to dynamically render weather data based on user-selected ZIP codes.
        </p>
      </div>
    </div>
  );
}

export default Day39;
