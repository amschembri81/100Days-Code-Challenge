import { createSelector } from 'reselect';

// Base selector that returns the state of the 'someReduxSlice' slice
// If the slice does not exist, it returns an empty object as a fallback
const selectSomeReduxSlice = (state) => state.someReduxSlice || {};

// Memoized selector for accessing the 'data' from the Redux slice
// If 'data' is not available in the slice, it defaults to "No data available"
export const selectData = createSelector(
  [selectSomeReduxSlice],      // Input selector that provides the slice of state
  (slice) => slice.data || "No data available"  // Selector function that retrieves the 'data' or returns a default message
);

// Memoized selector for accessing the 'error' from the Redux slice
export const selectError = createSelector(
  [selectSomeReduxSlice],      // Input selector that provides the slice of state
  (slice) => slice.error       // Selector function that retrieves the 'error' from the state
);