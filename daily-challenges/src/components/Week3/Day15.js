import React, { useState } from 'react'; // Import React and useState hook for managing state
import axios from 'axios'; // Import axios for making HTTP requests
import DayInfoComponent from '../DayInfoComponent'; // Import DayInfoComponent to display day-specific information
import LifecycleDemo from "../../UniqueComponents/LifecycleDemo"; // Import LifecycleDemo component for demonstrating lifecycle methods
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge3.css"; // Import specific CSS for Day 15

function Day15() {
  // JSX element containing a greeting message with a waving hand emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>;

  const happyEmoji = '\u{1F60A}'; // 😊 Emoji to be passed to DayInfoComponent

  // useState hooks to manage the weather data, loading state, and the visibility of the LifecycleDemo component
  const [weather, setWeather] = useState(''); // State for storing the fetched weather data
  const [loading, setLoading] = useState(false); // State to track if the weather data is being fetched
  const [showLifecycleDemo, setShowLifecycleDemo] = useState(false); // State to toggle the visibility of the LifecycleDemo component

  // Function to fetch weather data from OpenWeather API
  const fetchWeather = async () => {
    setLoading(true); // Set loading to true when the fetching starts
    const apiKey = '81079bc3172b71333817eb0e8ca71bf5'; // API key for OpenWeather API
    const city = 'Chicago'; // City for which weather data is fetched
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // API request URL

    try {
      // Make the API request and get weather data
      const response = await axios.get(url);
      const weatherData = `${response.data.weather[0].description}, ${response.data.main.temp}°C`; // Format the weather data
      setWeather(weatherData); // Update the weather state with fetched data
    } catch (error) {
      console.error('Error fetching weather data:', error); // Handle error if API request fails
    } finally {
      setLoading(false); // Set loading to false once the fetching is done
    }
  };

  return (
    <div className="day-container"> {/* Main container for Day 15 */}
      <h1>Day 15 - Class Components</h1> {/* Title for the challenge */}
      {element} {/* Render the greeting element with an emoji */}

      {/* Display day-specific information using DayInfoComponent */}
      <DayInfoComponent
        date="August 6, 2024" // Date of the challenge
        dayNumber="Day 15" // Current day number
        challenge="Understand class components and their lifecycle." // Challenge description
        happyEmoji={happyEmoji} // Pass the happyEmoji to the component
        weather={weather || 'No weather data available.'} // Display weather data or a default message if no data
      />
      
      {/* Button to fetch weather data, with a loading state */}
      <button className="button" onClick={fetchWeather} disabled={loading}> {/* Disable button while loading */}
        {loading ? 'Fetching Weather...' : 'Fetch Weather'} {/* Show appropriate button text based on loading state */}
      </button>

      {/* Button to toggle the visibility of the LifecycleDemo component */}
      <button
        className="lifecyclebutton"
        onClick={() => setShowLifecycleDemo((prev) => !prev)} // Toggle showLifecycleDemo state
      >
        {showLifecycleDemo ? 'Hide' : 'Show'} Lifecycle Demo {/* Button text changes based on visibility state */}
      </button>

      {/* Conditionally render the LifecycleDemo component if showLifecycleDemo is true */}
      {showLifecycleDemo && <LifecycleDemo />}

      {/* Section explaining the lifecycle methods of the class component */}
      <div className="lifecycle">
        <p><strong>This class component includes:</strong></p>
        <p><i>constructor</i>, <i>componentDidMount</i>, <i>componentDidUpdate</i>, and <i>componentWillUnmount</i></p> {/* List of lifecycle methods */}
        <p>lifecycle methods, and logs messages to the console during each phase.</p> {/* Description of lifecycle behavior */}
      </div>
    </div>
  );
}

export default Day15;