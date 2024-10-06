import React, { useState } from "react"; // Import React and useState for managing state
import axios from "axios"; // Import axios for making HTTP requests
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 17

function Day17() {
  // JSX element containing a greeting message with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = "\u{1F60A}"; // 😊 Emoji to be passed to DayInfoComponent

  // useState hooks to manage the weather data and form inputs
  const [weather, setWeather] = useState(""); // State to store fetched weather data
  const [name, setName] = useState(""); // State to store the name input from the form
  const [email, setEmail] = useState(""); // State to store the email input from the form
  const [formMessage, setFormMessage] = useState(""); // State to store form submission messages

  // Function to fetch weather data from the OpenWeather API
  const fetchWeather = async () => {
    const apiKey = "81079bc3172b71333817eb0e8ca71bf5"; // API key for OpenWeather
    const city = "Chicago"; // City to fetch weather for
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API URL for weather data

    try {
      // Make the API request and get weather data
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`; // Format the weather data
      setWeather(weatherData); // Update weather state with fetched data
    } catch (error) {
      console.error("Error fetching weather data:", error); // Handle error if API request fails
    }
  };

  // Function to handle form submission and validation
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if name or email fields are empty
    if (name === "" || email === "") {
      setFormMessage("Please fill out all fields. \u{1F641}"); // 😡 Error message if fields are missing
    } 
    // Validate email format using a regular expression
    else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMessage("Please enter a valid email. \u{1F615}"); // 😟 Error message for invalid email
    } 
    // If both fields are valid, show success message
    else {
      setFormMessage(`Form submitted successfully! Thank you, ${name}. \u{1F389}`); // 🎉 Success message after form submission
    }
  };

  return (
    <div className="day-container"> {/* Main container for Day 17 challenge */}
      <h1>Day 17 - Handling Forms</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 8, 2024" // Date of the challenge
        dayNumber="Day 17" // Current day number
        challenge="Validate and handle form submissions." // Challenge description
        happyEmoji={happyEmoji} // Pass the happyEmoji to the component
        weather={weather} // Display fetched weather data
      />

      {/* Button to fetch weather data */}
      <button className="button" onClick={fetchWeather}>
        Fetch Weather
      </button>

      {/* Form for collecting name and email inputs */}
      <form className="input-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label> {/* Label for the name input */}
          <input
            type="text"
            id="name"
            className="input-field" // Class for styling the input field
            value={name} // Bind input value to the name state
            onChange={(e) => setName(e.target.value)} // Update name state when input changes
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label> {/* Label for the email input */}
          <input
            type="email"
            id="email"
            className="input-field" // Class for styling the input field
            value={email} // Bind input value to the email state
            onChange={(e) => setEmail(e.target.value)} // Update email state when input changes
          />
        </div>

        {/* Submit button for the form */}
        <button type="submit" className="submit-button2">
          Submit
        </button>
      </form>

      {/* Display form submission messages if formMessage is not empty */}
      {formMessage && <div className="form-message">{formMessage}</div>}
    </div>
  );
}

export default Day17;
