import React, { useReducer, useState } from "react";
import DayInfoComponent from "../DayInfoComponent";
import ErrorBoundary from "../ErrorBoundary";
import withWeatherData from "../../UniqueComponents/withWeatherData";
import "./Challenge8.css";

// Define reducer to manage the to-do list state
function todoReducer(state, action) {
  switch (action.type) {
    case "add": // Adds a new task to the state
      return [...state, action.payload];
    case "remove": // Removes a task by filtering it out based on its index
      return state.filter((todo, index) => index !== action.index);
    default:
      return state; // Return the current state if the action type doesn't match
  }
}

function Day53({ weather, bgColor }) {
  // useReducer to manage the array of to-dos, initialized as an empty array
  const [todos, dispatch] = useReducer(todoReducer, []); 

  // useState to handle input field for new to-dos
  const [input, setInput] = useState("");

  // Function to handle adding a new to-do
  const handleAddTodo = () => {
    if (input.trim()) { // Ensure that the input is not empty or just whitespace
      dispatch({ type: "add", payload: input }); // Dispatch an action to add the input to the list
      setInput(""); // Clear input field after adding the task
    }
  };

  return (
    <div className="day-container" style={{ backgroundColor: bgColor }}>
      <h1>Day 53 - React Hooks (useReducer)</h1>
      
      {/* DayInfoComponent displays the weather, date, and challenge */}
      <DayInfoComponent
        date="September 14, 2024"
        dayNumber="Day 53"
        challenge="Use useReducer for complex state logic"
        weather={weather}
      />

      {/* To-do list container */}
      <div className="todo-list">
        <h3>To-Do List</h3>
        {/* Input field for entering tasks */}
        <input
          type="text"
          value={input} // Controlled input for the task
          onChange={(e) => setInput(e.target.value)} // Update state as user types
          placeholder="Enter a task"
        />
        {/* Button to add a new task */}
        <button onClick={handleAddTodo}>Add Task</button>

        {/* Display the list of to-dos */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}{" "}
              {/* Button to remove a task */}
              <button onClick={() => dispatch({ type: "remove", index })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Challenge description */}
      <h4 className="description">Description:</h4>
      <p>
        In this challenge, I used the useReducer hook to manage a to-do list with complex state logic, allowing tasks to be added and removed dynamically. This setup demonstrates how useReducer can simplify state management in React applications with multiple actions.
      </p>
    </div>
  );
}

// Wrap Day53 with weather data handling logic
const Day53WithWeatherData = withWeatherData(Day53);

// Export the component wrapped in an ErrorBoundary to handle errors gracefully
export default function Day53WithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Day53WithWeatherData />
    </ErrorBoundary>
  );
}
