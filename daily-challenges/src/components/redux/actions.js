import { createSlice } from '@reduxjs/toolkit';

// Initial state for the weather-related data and other app-wide state
const initialState = {
  weather: null,       // Stores the current weather data (null initially)
  unit: 'imperial',    // Unit of measurement for temperature, defaults to 'imperial'
  favorites: [],       // Array to store favorite locations
  counter: 0,          // Counter for any specific functionality that needs it
};

// The weatherSlice is created using createSlice from Redux Toolkit
const weatherSlice = createSlice({
  name: 'weather',   // The name of the slice of state
  initialState,      // Initial state defined above
  reducers: {        // Reducers define how the state changes in response to actions

    // Action to update the weather data in the state
    setWeather: (state, action) => {
      state.weather = action.payload;  // Updates the weather with the data passed in the action
    },

    // Action to toggle between 'imperial' and 'metric' units
    toggleUnit: (state) => {
      state.unit = state.unit === 'imperial' ? 'metric' : 'imperial';  // Toggles between the two units
    },

    // Action to add a location to the list of favorite locations
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);  // Adds the location (payload) to the favorites array
    },

    // Action to remove a location from the favorites list
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== action.payload  // Removes the location from the array
      );
    },

    // Action to increment the counter (for any counting-related functionality)
    incrementCounter: (state) => {
      state.counter += 1;  // Increases the counter by 1
    },

    // Action to decrement the counter
    decrementCounter: (state) => {
      state.counter -= 1;  // Decreases the counter by 1
    },
  },
});

// Exporting all the actions so they can be used in components to dispatch updates
export const {
  setWeather,
  toggleUnit,
  addFavorite,
  removeFavorite,
  incrementCounter,
  decrementCounter,
} = weatherSlice.actions;

// Exporting the reducer, which will be used to manage this slice of state in the Redux store
export default weatherSlice.reducer;