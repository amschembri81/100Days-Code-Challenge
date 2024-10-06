import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';   // Importing weather reducer
import week6Slice from './week6Slice';       // Importing week6 reducer

// Configuring the Redux store
const store = configureStore({
  reducer: {
    // Adding the 'weather' slice of state with the weatherSlice reducer
    weather: weatherSlice,
    
    // Adding the 'week6' slice of state with the week6Slice reducer
    week6: week6Slice,
  },
});

export default store;