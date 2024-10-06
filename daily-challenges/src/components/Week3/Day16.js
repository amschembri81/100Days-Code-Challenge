import React, { useState } from "react"; // Import React and useState hook for managing component state
import axios from "axios"; // Import axios for making HTTP requests
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent for displaying day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 16

function Day16() {
  // useState hooks to manage the weather data and event logs
  const [weather, setWeather] = useState(""); // State to store fetched weather data
  const [logs, setLogs] = useState([]); // State to store event log messages
  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent

  // Function to fetch weather data from the OpenWeather API
  const fetchWeather = async () => {
    const apiKey = '81079bc3172b71333817eb0e8ca71bf5'; // API key for OpenWeather
    const city = 'Chicago'; // City to fetch weather for
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL for weather data

    try {
      // Make the API request and get weather data
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`; // Format the weather data
      setWeather(weatherData); // Update weather state with fetched data
    } catch (error) {
      console.error('Error fetching weather data:', error); // Handle error if API request fails
    }
  };

  // Function to add a new log message to the logs array
  const addLog = (message) => {
    setLogs((prevLogs) => [...prevLogs, message]); // Append new log to the existing logs
  };

  // Event handler for parent element during the bubbling phase
  const handleParentClick = (e) => {
    addLog("Parent clicked - bubbling phase"); // Log bubbling phase message for parent
  };

  // Event handler for parent element during the capturing phase
  const handleParentCaptureClick = (e) => {
    addLog("Parent clicked - capturing phase"); // Log capturing phase message for parent
  };

  // Event handler for child button during the bubbling phase
  const handleChildClick = (e) => {
    addLog("Child clicked - bubbling phase"); // Log bubbling phase message for child
    e.stopPropagation(); // Stop event propagation to parent in bubbling phase
  };

  // Event handler for child button during the capturing phase
  const handleChildCaptureClick = (e) => {
    addLog("Child clicked - capturing phase"); // Log capturing phase message for child
  };

  return (
    <div className="day-container"> {/* Main container for Day 16 challenge */}
      <div className="container"> {/* Inner container for content */}
        <h1>Day 16 - Event Propagation</h1> {/* Title for the challenge */}

        {/* Display day-specific information using DayInfoComponent */}
        <DayInfoComponent
          date="August 7, 2024" // Date of the challenge
          dayNumber="Day 16" // Current day number
          challenge="Understand event propagation in React." // Challenge description
          happyEmoji={happyEmoji} // Pass the happyEmoji to the component
          weather={weather} // Display fetched weather data
        />

        {/* Button to fetch weather data */}
        <button className="button" onClick={fetchWeather}>
          Fetch Weather
        </button>

        {/* Parent div with event handlers for capturing and bubbling phases */}
        <div className="parent" onClickCapture={handleParentCaptureClick} onClick={handleParentClick}>
          {/* Child button with event handlers for capturing and bubbling phases */}
          <button
            className="event-propagation-button"
            onClickCapture={handleChildCaptureClick} // Handle event in capturing phase for child
            onClick={handleChildClick} // Handle event in bubbling phase for child
          >
            Click me to see event propagation {/* Button text */}
          </button>
        </div>

        {/* Logs section to display event messages */}
        <div className="logs">
          {logs.map((log, index) => (
            <p key={index}>{log}</p> // Display each log message with a unique key
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day16;