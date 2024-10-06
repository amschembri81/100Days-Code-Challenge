import React, { useState } from "react"; // Import React and useState hook for state management
import axios from "axios"; // Import axios to handle HTTP requests
import DayInfoComponent from "../DayInfoComponent"; // Import a custom component for displaying day info
import "../../Challenges.css"; // Import global styles
import "./Challenge1.css"; // Import specific styles for Day 7

function Day7() {
  // JSX element containing an emoji wave
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  // List of topics learned so far
  const learned = [
    "Setup React Environment",
    "JSX Basics",
    "Functional Components",
    "Props",
    "Styling",
    "State Management",
    "Event Handling",
    "Conditional Rendering",
  ];

  // Emojis used in the component
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  const happyEmoji = "\u{1F60A}"; // 😊
  const partyEmoji = "\u{1F389}"; // 🎉

  // Array of motivational messages
  const messages = [
    "Let's code!",
    "Keep going, you're doing great!",
    "Don't give up!",
    "You're making progress!",
    "Stay focused and keep coding!",
  ];

  // useState hook for managing message index, weather data, and conditional rendering of DayInfoComponent
  const [messageIndex, setMessageIndex] = useState(0);
  const [weather, setWeather] = useState("");
  const [showDayInfo, setShowDayInfo] = useState(true); // Controls whether the DayInfoComponent is displayed

  // Function to update the message index by cycling through the array
  const updateMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  // Function to fetch weather data using the OpenWeather API
  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // API key from .env file
    const city = "Chicago"; // City for weather query
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API request URL

    try {
      const response = await axios.get(url); // Fetch weather data
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`; // Parse and format weather data
      setWeather(weatherData); // Update weather state
    } catch (error) {
      console.error("Error fetching weather data:", error); // Log error if request fails
    }
  };

  return (
    <div className="day-container"> {/* Main container for Day 7 challenge */}
      <h1>Day 7 - Conditional Rendering</h1> {/* Challenge title */}
      {element} {/* Display the emoji wave */}

      {/* Conditionally render the DayInfoComponent based on showDayInfo state */}
      {showDayInfo && (
        <DayInfoComponent
          date="July 30, 2024"
          dayNumber="Day 7"
          challenge="Render components conditionally based on state."
          message={messages[messageIndex]}
          codingEmoji={codingEmoji}
          coffeeEmoji={coffeeEmoji}
          happyEmoji={happyEmoji}
          partyEmoji={partyEmoji}
          weather={weather} // Pass fetched weather data to the component
        />
      )}

      {/* Button to toggle the visibility of the DayInfoComponent */}
      <button className="button" onClick={() => setShowDayInfo(!showDayInfo)}>
        Toggle Day Info
      </button>

      {/* Button to cycle through motivational messages */}
      <button className="button" onClick={updateMessage}>
        Update Message
      </button>

      {/* Button to fetch and display the current weather */}
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>

      {/* Display a list of learned topics */}
      <h2>What I have practiced so far:</h2>
      <ul className="learned-list">
        {learned.map((item, index) => (
          <li key={index}>{item}</li> // List each learned item with a unique key
        ))}
      </ul>
    </div>
  );
}

export default Day7;