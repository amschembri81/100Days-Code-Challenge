import { createSlice } from '@reduxjs/toolkit';

// Initial state for the weather slice of your Redux store
const initialState = {
  weather: null,         // Stores the current weather data
  unit: 'imperial',      // Unit for temperature (imperial for Fahrenheit, metric for Celsius)
  favorites: [],         // List of favorite ZIP codes
  theme: 'light',        // UI theme (light or dark)
  counter: 0,            // Global counter, can be used for general app purposes
  bgColor: '#ffffff',    // Background color, changes based on theme
};

// Creating the weather slice with various reducers
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    // Sets weather data and updates background color based on weather conditions
    setWeather: (state, action) => {
      state.weather = action.payload?.weather || state.weather; // Ensures weather is set safely
      state.bgColor = action.payload?.bgColor || state.bgColor; // Updates background color safely
    },

    // Toggles temperature units between Fahrenheit and Celsius
    toggleUnit: (state) => {
      state.unit = state.unit === 'imperial' ? 'metric' : 'imperial';
    },

    // Adds a ZIP code to the list of favorites, avoiding duplicates
    addFavorite: (state, action) => {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload); // Only add if not already in the list
      }
    },

    // Removes a ZIP code from the list of favorites
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== action.payload
      );
    },

    // Increments a global counter
    incrementCounter: (state) => {
      state.counter += 1;
    },

    // Decrements a global counter
    decrementCounter: (state) => {
      state.counter -= 1;
    },

    // Toggles between light and dark themes, and updates the background color accordingly
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      state.bgColor = state.theme === 'light' ? '#ffffff' : '#333333'; // Updates background color based on theme
    },
  },
});

// Exporting the actions so they can be dispatched in components
export const {
  setWeather,
  toggleUnit,
  addFavorite,
  removeFavorite,
  incrementCounter,
  decrementCounter,
  toggleTheme,
} = weatherSlice.actions;

// Exporting the reducer to be used in the Redux store
export default weatherSlice.reducer;