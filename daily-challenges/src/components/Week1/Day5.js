import React, { useState } from "react";
import axios from "axios";
import DayInfoComponent from "../DayInfoComponent"; // Import reusable component for displaying day information
import "../../Challenges.css"; // Global CSS styles
import "./Challenge1.css"; // Challenge-specific CSS

function Day5() {
  // JSX element for greeting with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  // Emojis used throughout the component
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}";  // ☕
  const happyEmoji = "\u{1F60A}";  // 😊
  const partyEmoji = "\u{1F389}";  // 🎉

  // Array of motivational messages to cycle through
  const messages = [
    "Let's code!",
    "Keep going, you're doing great!",
    "Don't give up!",
    "You're making progress!",
    "Stay focused and keep coding!",
  ];

  // State variables
  const [messageIndex, setMessageIndex] = useState(0); // Tracks the current message
  const [weather, setWeather] = useState(""); // Stores fetched weather data
  const [showDayInfo, setShowDayInfo] = useState(true); // Controls visibility of DayInfoComponent

  // Function to cycle through messages
  const updateMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length); // Increment message index, loop back after reaching the end
  };

  // Function to fetch weather data using Axios
  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // API key for OpenWeather, stored in .env file
    const city = "Chicago"; // Hardcoded city for weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL with city and metric units

    try {
      // Make the API call to fetch weather data
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`; // Extract description and temperature
      setWeather(weatherData); // Update weather state with fetched data
    } catch (error) {
      console.error("Error fetching weather data:", error); // Handle any errors in the request
    }
  };

  return (
    <div className="day-container">
      {/* Header for Day 5 challenge */}
      <h1>Day 5 - State Basics</h1>

      {/* Display greeting element */}
      {element}

      {/* Conditionally render DayInfoComponent based on showDayInfo state */}
      {showDayInfo && (
        <DayInfoComponent
          date="July 31, 2024"
          dayNumber="Day 7"
          challenge="Render components conditionally based on state."
          message={messages[messageIndex]} // Display current message from messages array
          codingEmoji={codingEmoji}   // Pass coding emoji
          coffeeEmoji={coffeeEmoji}   // Pass coffee emoji
          happyEmoji={happyEmoji}     // Pass happy emoji
          partyEmoji={partyEmoji}     // Pass party emoji
          weather={weather}           // Pass weather data (empty until fetched)
        />
      )}

      {/* Button to toggle visibility of DayInfoComponent */}
      <button className="button" onClick={() => setShowDayInfo(!showDayInfo)}>
        Toggle Day Info
      </button>

      {/* Button to cycle through motivational messages */}
      <button className="button" onClick={updateMessage}>
        Update Message
      </button>

      {/* Button to fetch weather data */}
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>
    </div>
  );
}

export default Day5;