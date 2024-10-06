import React, { useEffect, useState } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge7.css";

function Day49({ weather, bgColor }) {
  // State to store incoming WebSocket messages
  const [messages, setMessages] = useState([]);
  // State to store connection error, if any
  const [connectionError, setConnectionError] = useState(null);

  // useEffect to manage WebSocket lifecycle
  useEffect(() => {
    // Initialize WebSocket connection to a public echo WebSocket server
    const ws = new WebSocket("wss://echo.websocket.events");

    // Event handler for when the connection is established
    ws.onopen = () => {
      console.log("WebSocket connection established");
      // Send a test message to the WebSocket server
      ws.send("Hello, WebSocket!"); 
    };

    // Event handler for any errors during WebSocket connection
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      // Update the state to display the error message
      setConnectionError("WebSocket connection failed. Please try again.");
    };

    // Event handler for incoming messages from the WebSocket
    ws.onmessage = (event) => {
      // Update the messages array with the new message
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Cleanup WebSocket connection when the component unmounts
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close(); // Close the WebSocket connection
      }
      console.log("WebSocket connection closed");
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;
  const happyEmoji = "\u{1F60A}";

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 49 - React and WebSocket</h1>
      {element}
      <DayInfoComponent
        date="September 10, 2024"
        dayNumber="Day 49"
        challenge="Implement real-time features using WebSockets"
        weather={weather}
        happyEmoji={happyEmoji}
      />

      <div className="messages-container">
        <h3>Real-Time Messages:</h3>
        {connectionError ? (
          // Display error message if there is a connection error
          <p className="error">{connectionError}</p>
        ) : (
          // Display the list of messages received from the WebSocket
          <ul className="no-bullets">
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        )}
      </div>

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used WebSockets to implement real-time features in a React application by establishing a live connection between the app and a server. The useEffect hook managed the WebSocket lifecycle, handling connection setup, message reception, and cleanup on component unmount, allowing real-time messages to be displayed without refreshing the page.
      </p>
    </div>
  );
}

// Wrap the Day49 component with weather data and error handling
const Day49WithWeatherData = withWeatherData(Day49);

// Export the component wrapped with error boundary
export default function Day49WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day49WithWeatherData />
    </ErrorBoundary>
  );
}
