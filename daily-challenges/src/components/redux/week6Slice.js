import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  weather: null,             // Stores the weather data (e.g., weather description, temperature)
  bgColor: '#ffffff',        // Default background color for the application (changes based on weather)
  loading: false,            // Tracks if weather data is currently being fetched
  error: null,               // Stores any error messages if weather data fetch fails
  favoriteLocations: [],     // Array to store favorite ZIP code locations
  searchHistory: [],         // Array to store previously searched ZIP codes
};

// Slice for Week 6 challenges with reducers for handling weather, search history, and favorite locations
const week6Slice = createSlice({
  name: 'week6',             // Name of the slice (used internally by Redux)
  initialState,              // Initial state for this slice
  reducers: {
    
    // Reducer to handle the start of a weather fetch (sets loading to true and clears any errors)
    fetchWeatherStart(state) {
      state.loading = true;  // Indicate data fetching is in progress
      state.error = null;    // Reset error to null
    },

    // Reducer to handle successful weather data fetching
    fetchWeatherSuccess(state, action) {
      state.loading = false;                // Set loading to false once data is fetched
      state.weather = action.payload.weather; // Set the fetched weather data
      state.bgColor = action.payload.bgColor; // Set the background color based on weather
    },

    // Reducer to handle weather fetch failure (set loading to false and store the error message)
    fetchWeatherFailure(state, action) {
      state.loading = false;  // Stop the loading state
      state.error = action.payload;  // Set error message
    },

    // Reducer to add a favorite location (immutably adds a ZIP code to the favorites array)
    addFavoriteLocation: (state, action) => {
      return {
        ...state,  // Copy the previous state
        favoriteLocations: [...state.favoriteLocations, action.payload], // Add the new location
      };
    },

    // Reducer to remove a favorite location (immutably removes a ZIP code from the favorites array)
    removeFavoriteLocation: (state, action) => {
      return {
        ...state,  // Copy the previous state
        favoriteLocations: state.favoriteLocations.filter((loc) => loc !== action.payload), // Remove location
      };
    },

    // Reducer to add a ZIP code to the search history (immutably adds a ZIP code)
    addSearchHistory: (state, action) => {
      return {
        ...state,  // Copy the previous state
        searchHistory: [...state.searchHistory, action.payload], // Add the new search to the history
      };
    },
  },
});

// Extract the actions from the slice
const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = week6Slice.actions;

// Async thunk to fetch weather data from OpenWeather API
export const fetchWeather = (zipCode) => async (dispatch, getState) => {
  dispatch(fetchWeatherStart());  // Start fetching weather data
  try {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Get API key from environment variables
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`;

    // Make the API call to fetch weather data
    const response = await axios.get(url);
    const weather = response.data.weather[0].description;  // Get weather description
    const temp = response.data.main.temp;  // Get temperature
    const mainWeather = response.data.weather[0].main.toLowerCase();  // Main weather condition (e.g., clear, clouds)

    // Define background colors for different weather conditions
    const weatherColors = {
      clear: '#f7d358',
      clouds: '#d3d3d3',
      rain: '#a4a4a4',
      thunderstorm: '#616161',
      snow: '#f2f2f2',
      mist: '#c0c0c0',
    };
    const bgColor = weatherColors[mainWeather] || '#ffffff'; // Default to white if weather condition is not found

    // Dispatch successful weather data and background color
    dispatch(fetchWeatherSuccess({ weather: `${weather}, ${temp}°F`, bgColor }));

    // Check if the ZIP code is already in the search history before adding it
    const { searchHistory } = getState().week6; // Get the current search history from the state
    if (!searchHistory.includes(zipCode)) {
      dispatch(addSearchHistory(zipCode));  // Add ZIP code to search history if not already present
    }
  } catch (error) {
    dispatch(fetchWeatherFailure('Failed to fetch weather data'));  // Dispatch error if API call fails
  }
};

// Export actions for managing favorite locations and search history
export const { addFavoriteLocation, removeFavoriteLocation, addSearchHistory } = week6Slice.actions;

// Export the reducer to be used in the Redux store
export default week6Slice.reducer;