import React, { useState } from "react"; // Import React and useState hook for managing component state
import axios from "axios"; // Import axios for making HTTP requests
import DayInfoComponent from "../DayInfoComponent"; // Import custom component for displaying day information
import "../../Challenges.css"; // Import global CSS for general styling
import "./Challenge1.css"; // Import specific CSS for Day 6 challenge

function Day6() {
  // JSX element containing an emoji wave
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  // Emojis to use in the component
  const codingEmoji = "\u{1F4BB}"; // 💻
  const coffeeEmoji = "\u{2615}"; // ☕
  const happyEmoji = "\u{1F60A}"; // 😊

  // Array of messages to display
  const messages = [
    "Let's code!",
    "Keep going, you're doing great!",
    "Don't give up!",
    "You're making progress!",
    "Stay focused and keep coding!",
  ];

  // useState hook for managing the current message index
  const [messageIndex, setMessageIndex] = useState(0);
  // useState hook for storing fetched weather information
  const [weather, setWeather] = useState("");

  // Function to update the displayed message by cycling through the array
  const updateMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  // Function to fetch the weather data from the OpenWeather API
  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Fetch API key from .env file
    const city = "Chicago"; // Specify the city for the weather query
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Construct the API request URL

    try {
      // Make the API request and store the weather description and temperature
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`;
      setWeather(weatherData); // Update the state with the fetched weather data
    } catch (error) {
      console.error("Error fetching weather data:", error); // Log errors to the console if the request fails
    }
  };

  return (
    <div className="day-container"> {/* Container div for styling */}
      <h1>Day 6 - Event Handling</h1> {/* Challenge title */}
      {element} {/* Display the emoji wave */}
      
      {/* Display day info and emojis through the DayInfoComponent */}
      <DayInfoComponent
        date="July 30, 2024"
        dayNumber="Day 6"
        challenge="Handle events like button clicks in React."
        message={messages[messageIndex]}
        codingEmoji={codingEmoji}
        coffeeEmoji={coffeeEmoji}
        happyEmoji={happyEmoji}
        weather={weather} // Display weather data if available
      />

      {/* Button to update the message */}
      <button className="button" onClick={updateMessage}>
        Update Message
      </button>

      {/* Button to fetch the weather data */}
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>
    </div>
  );
}

export default Day6; // Export the component to be used elsewhere