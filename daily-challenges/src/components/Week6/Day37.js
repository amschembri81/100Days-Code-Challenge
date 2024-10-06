import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteLocation, removeFavoriteLocation } from "../redux/week6Slice"; // Import actions to add/remove favorite locations
import DayInfoComponent from "../DayInfoComponent"; // Component to display the day's information
import ErrorBoundary from "../ErrorBoundary"; // Component to catch runtime errors
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC to provide weather data
import "./Challenge6.css"; // Import custom styles

function Day37({ weather, bgColor }) {
  // JSX element with a greeting and emoji
  const element = <h1>Hello, everyone! {"\u{1F44B}"}</h1>; // 👋 Emoji for interaction
  const happyEmoji = "\u{1F60A}"; // 😊 Emoji for happiness

  const dispatch = useDispatch(); // Hook to dispatch actions to Redux
  const favoriteLocations = useSelector((state) => state.week6.favoriteLocations); // Access the list of favorite locations from Redux
  const [location, setLocation] = useState(""); // State to store the user input for a new favorite location

  // Function to add a location to favorites
  const handleAddFavorite = () => {
    if (location.length > 0) { // Ensure that the input is not empty
      dispatch(addFavoriteLocation(location)); // Dispatch action to add the location to favorites
      setLocation(""); // Clear the input field after adding the location
    }
  };

  // Function to remove a location from favorites
  const handleRemoveFavorite = (loc) => {
    dispatch(removeFavoriteLocation(loc)); // Dispatch action to remove the location from favorites
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 37 - Immutable Data in Redux</h1> {/* Display the day's title */}
      {element} {/* Display greeting */}
      <DayInfoComponent
        date="August 29, 2024" // Display the current date
        dayNumber="Day 37" // Display the day number
        challenge="Immutable Data in Redux - Using Immutable Patterns" // Display the challenge for the day
        weather={weather} // Display the weather data passed as props
        happyEmoji={happyEmoji} // Pass the happy emoji for the display
      />

      {/* Input and Button to add a favorite location */}
      <div className="zip-code-container">
        <label>
          <h5>Add a Favorite Location:</h5> {/* Label for the input field */}
        </label>
        <div className="input-button-container">
          <input
            className="zipcode" // Class for input styling
            type="text"
            value={location} // Controlled input for the location
            onChange={(e) => setLocation(e.target.value)} // Update state on input change
            placeholder="Zip Code" // Placeholder text
          />
          <button className="weatherbutton" onClick={handleAddFavorite}>
            Add to Favorites {/* Button to add the location to favorites */}
          </button>
        </div>
      </div>

      {/* List of Favorite Locations */}
      <div className="favorites-container">
        <h3>Favorite Locations</h3> {/* Title for the favorites section */}
        <ul>
          {favoriteLocations.map((loc, index) => (
            <li key={index}> {/* Render each favorite location */}
              {loc}
              <button
                className="button-remove" // Button to remove the favorite location
                onClick={() => handleRemoveFavorite(loc)} // Remove the location on button click
              >
                Remove {/* Button text */}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Explanation section */}
      <h4 className="explanation">Explanation:</h4>
      <p>
        In this challenge, I handled updates to the list of favorite locations using immutable data patterns. Redux ensures that the original state remains unmodified by returning a new state object with the updated data.
        You can add and remove favorite locations, and the list will be updated without mutating the original state.
      </p> {/* Explanation of the challenge solution */}
    </div>
  );
}

const Day37WithWeatherData = withWeatherData(Day37); // HOC to wrap the component and provide weather data

export default function Day37WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day37WithWeatherData /> {/* Wrap the component with ErrorBoundary to handle runtime errors */}
    </ErrorBoundary>
  );
}
