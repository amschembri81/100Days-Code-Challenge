import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/week6Slice'; // Import the thunk action that handles async weather fetching
import DayInfoComponent from '../DayInfoComponent'; // Component for displaying the challenge's day info
import ErrorBoundary from '../ErrorBoundary'; // Error boundary to catch runtime errors in the component tree
import withWeatherData from '../../UniqueComponents/withWeatherData'; // HOC to provide weather data to the component
import './Challenge6.css'; // Import the custom styles for the component

function Day36({ weather, bgColor }) {
  // JSX element displaying a greeting with emojis
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;
  const happyEmoji = "\u{1F60A}"; // 😊 Emoji for visual interaction
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  const [zipCode, setZipCode] = useState(''); // Local state to store the user's ZIP code input
  const { loading, error } = useSelector((state) => state.week6); // Access loading and error states from Redux

  // Function to dispatch the fetchWeather thunk action when a valid ZIP code is entered
  const handleFetchWeather = () => {
    if (zipCode.length === 5) { // Ensure the ZIP code is exactly 5 digits
      dispatch(fetchWeather(zipCode)); // Dispatch the thunk action to fetch weather based on the ZIP code
    }
  };

  // Fun weather-related joke to engage users
  const weatherJoke = "Why don't weathermen need to get degrees? Because they already have Fahrenheit and Celsius!";

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 36 - Async Operations in Redux</h1>
      {element}
      <DayInfoComponent
        date="August 28, 2024"
        dayNumber="Day 36"
        challenge="Async Operations in Redux - Using Redux Thunk" // Challenge description for the day
        weather={loading ? 'Loading weather...' : weather} // Show 'Loading...' while fetching weather, otherwise display the weather data
        happyEmoji={happyEmoji} // Pass the emoji for visual interaction
      />
      {/* Display error message if the weather fetch fails */}
      {error && <p className="error">{error}</p>}

      {/* ZIP Code Input and Button Section */}
      <div className="zip-code-container">
        <label>
          <h5>Enter your ZIP code:</h5> {/* Label for the input field */}
        </label>
        <div className="input-button-container">
          {/* Input for the ZIP code */}
          <input
            className="zipcode"
            type="text"
            value={zipCode} // Controlled input for the ZIP code
            onChange={(e) => setZipCode(e.target.value)} // Update the ZIP code state on user input
            maxLength="5" // Limit input to 5 characters
            placeholder="ZIP Code" // Placeholder text for the input field
          />
          {/* Button to fetch weather based on the entered ZIP code */}
          <button className="weatherbutton" onClick={handleFetchWeather}>
            Fetch Weather
          </button>
        </div>
      </div>
      <h4 className="explanation">Explanation: </h4>
      <p>The container color changes based on the current weather conditions in the location you provide.</p>
      
      {/* Joke section to keep the user engaged */}
      <div className="joke-container">
        <h3>Here’s a fun weather joke for you!</h3> {/* Header for the joke */}
        <p>{weatherJoke}</p> {/* Display the joke */}
      </div>
    </div>
  );
}

const Day36WithWeatherData = withWeatherData(Day36); // HOC to wrap the Day36 component and provide weather data

export default function Day36WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day36WithWeatherData /> {/* ErrorBoundary to catch any runtime errors and prevent app crashes */}
    </ErrorBoundary>
  );
}
