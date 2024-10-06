import React, { useState } from "react"; // Import React and useState hook for managing state
import axios from "axios"; // Import axios for making HTTP requests
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent for displaying day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 18

function Day18() {
  // JSX element containing a greeting message with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent
  
  // useState hooks to manage the weather data and fun fact messages
  const [weather, setWeather] = useState(""); // State for storing fetched weather data
  const [funFact, setFunFact] = useState("Click 'Update Message' for a fun fact!"); // State for storing the current fun fact

  // Object mapping weather conditions to emojis
  const weatherEmojis = {
    clear: "☀️",
    clouds: "☁️",
    rain: "🌧️",
    thunderstorm: "⛈️",
    snow: "❄️",
    mist: "🌫️",
  };

  // Function to fetch weather data from the OpenWeather API
  const fetchWeather = async () => {
    const apiKey = "81079bc3172b71333817eb0e8ca71bf5"; // API key for OpenWeather
    const city = "Chicago"; // City to fetch weather for
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL for weather data

    try {
      // Make the API request and get weather data
      const response = await axios.get(url);
      const description = response.data.weather[0].description; // Get weather description
      const temp = response.data.main.temp; // Get temperature
      const mainWeather = response.data.weather[0].main.toLowerCase(); // Get main weather type (e.g., clear, clouds)

      // Get corresponding emoji for the weather condition or empty string if not found
      const emoji = weatherEmojis[mainWeather] || ""; 
      const weatherData = `${description}, ${temp}°C ${emoji}`; // Format the weather data with emoji
      
      setWeather(weatherData); // Update weather state with fetched data
    } catch (error) {
      console.error("Error fetching weather data:", error); // Handle error if API request fails
    }
  };

  // Array of fun facts to display
  const funFacts = [
    "Honey never spoils! 🍯 ",
    "A single strand of Spaghetti is called a 'Spaghetto'. 🍝 ",
    "Avocados 🥑 are berries!",
    "Octopuses 🐙 have three hearts ❤️❤️❤️ .",
    "Bananas 🍌 are berries, but strawberries 🍓 aren't!"
  ];

  // Function to update the fun fact by picking a random fact from the array
  const updateMessage = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]; // Pick a random fact
    setFunFact(randomFact); // Update funFact state with the new fact
  };

  return (
    <div className="day-container"> {/* Main container for Day 18 challenge */}
      <h1>Day 18 - React Hooks (useState)</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 9, 2024" // Date of the challenge
        dayNumber="Day 18" // Current day number
        challenge="Replace class component state with useState hook." // Challenge description
        happyEmoji={happyEmoji} // Pass the happyEmoji to the component
        weather={weather} // Display fetched weather data
      />

      {/* Display current fun fact */}
      <div className="fun-fact-container">
        <h2><strong>Fun Fact: </strong> {funFact} </h2> {/* Display the fun fact */}
      </div>

      {/* Button to update the fun fact message */}
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

export default Day18;