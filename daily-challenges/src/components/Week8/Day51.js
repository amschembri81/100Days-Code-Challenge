import React, { useState } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge8.css";

function Day51({ weather, bgColor }) {
  // State to track authentication status and fetched data
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if the user is logged in
  const [data, setData] = useState(null); // Holds the data fetched from Firebase

  // Simulate the Firebase login process
  const handleLogin = () => {
    // Once the user "logs in", the state is updated to reflect authentication
    setIsAuthenticated(true);
  };

  // Simulate fetching data from Firebase
  const fetchData = () => {
    // Once the user is authenticated, they can fetch data, which is stored in state
    setData("Sample data from Firebase");
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      {/* Day title and weather component */}
      <h1>Day 51 - React and Firebase</h1>
      <DayInfoComponent
        date="September 12, 2024"
        dayNumber="Day 51"
        challenge="Integrate Firebase for authentication and database"
        weather={weather} // Display current weather data
      />

      {/* Firebase authentication and data fetching section */}
      <div className="firebase-container">
        {/* If not authenticated, show login button */}
        {!isAuthenticated ? (
          <button className="login-button" onClick={handleLogin}>
            Login with Firebase
          </button>
        ) : (
          <>
            {/* Once authenticated, show data fetching options */}
            <p>Logged in with Firebase!</p>
            <button className="login-button" onClick={fetchData}>
              Fetch Data from Firebase
            </button>
            {/* Display fetched data if available */}
            {data && <p>Fetched Data: {data}</p>}
          </>
        )}
      </div>

      {/* Challenge description */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I integrated Firebase for authentication and
        database services in a React app, enabling login and data storage functionality.
      </p>
    </div>
  );
}

// Higher-order component to inject weather data
const Day51WithWeatherData = withWeatherData(Day51);

// Wrap the component in an error boundary to handle any runtime errors
export default function Day51WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day51WithWeatherData />
    </ErrorBoundary>
  );
}
