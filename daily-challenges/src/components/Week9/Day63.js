import React, { useReducer, useState } from "react"; // Import necessary React hooks
import axios from "axios"; // Import axios for API requests
import DayInfoComponent from "../DayInfoComponent"; // Import component for displaying day info
import ErrorBoundary from "../ErrorBoundary"; // Import ErrorBoundary for error handling
import withWeatherData from "../../UniqueComponents/withWeatherData"; // HOC for weather data
import "./Challenge9.css"; // Import CSS for styling

// NASA API middleware (simulated)
const apiMiddleware = (dispatch) => async (action) => {
  // Middleware function to handle API requests
  if (action.type === "fetch_image") {
    dispatch({ type: "loading", payload: true }); // Set loading state to true
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY` // Fetch random space image from NASA API
      );
      dispatch({ type: "set_image", payload: response.data }); // Dispatch action to set image data
    } catch (error) {
      dispatch({ type: "error", payload: error.message }); // Dispatch action for error
    }
    dispatch({ type: "loading", payload: false }); // Set loading state to false
  } else {
    dispatch(action); // Dispatch other actions normally
  }
};

// Reducer to manage API data
function reducer(state, action) {
  switch (action.type) {
    case "set_image":
      return { ...state, image: action.payload, error: null }; // Update state with fetched image
    case "loading":
      return { ...state, loading: action.payload }; // Update loading state
    case "error":
      return { ...state, error: action.payload }; // Update error state
    default:
      return state; // Return current state for unknown actions
  }
}

function Day63({ weather, bgColor }) {
  const initialState = { image: null, loading: false, error: null }; // Initial state for reducer
  const [state, dispatch] = useReducer(reducer, initialState); // Use reducer for state management
  const [log, setLog] = useState([]); // State to log actions

  // Middleware wrapper for dispatching API call and logging it
  const middlewareDispatch = (action) => {
    setLog((prevLog) => [...prevLog, `Action: ${action.type}`]); // Log the action
    apiMiddleware(dispatch)(action); // Call the middleware with the action
  };

  const fetchImage = () => {
    middlewareDispatch({ type: "fetch_image" }); // Trigger fetch image action
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 63 - React and Redux Middleware</h1>
      <DayInfoComponent
        date="September 24, 2024" // Date for Day 63
        dayNumber="Day 63" // Day number
        challenge="Implement custom middleware in Redux" // Challenge description
        weather={weather} // Weather data passed as prop
      />

      <div className="space-explorer">
        <h3>NASA Space Explorer</h3>
        <button className="redux-button" onClick={fetchImage}>
          Fetch Random Space Image
        </button>

        {state.loading && <p>Loading...</p>} {/* Show loading indicator */}
        {state.error && <p>Error: {state.error}</p>} {/* Show error message if any */}
        {state.image && ( // Render image details if available
          <div className="image-container">
            <h4>{state.image.title}</h4> {/* Display image title */}
            <img
              src={state.image.url}
              alt={state.image.title}
              className="space-image"
            />
            <p>{state.image.explanation}</p> {/* Display image explanation */}
          </div>
        )}
      </div>

      {/* Logs display */}
      <div className="log-container">
        <h3>Action Log:</h3>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li> 
          ))}
        </ul>
      </div>

      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I created a "Space Explorer" that fetches random images from NASA's API using Redux middleware to handle API requests and log actions.
      </p>
    </div>
  );
}

const Day63WithWeatherData = withWeatherData(Day63); // Wrap Day63 with weather data HOC

// Export the component wrapped in ErrorBoundary for error handling
export default function Day63WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day63WithWeatherData />
    </ErrorBoundary>
  );
}
