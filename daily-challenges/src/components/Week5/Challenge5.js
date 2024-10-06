import React from "react";
import Day29WithErrorBoundary from "./Day29";
import Day30WithErrorBoundary from "./Day30";
import Day31WithErrorBoundary from "./Day31";
import Day32WithErrorBoundary from "./Day32";
import Day33WithErrorBoundary from "./Day33";
import Day34WithErrorBoundary from "./Day34";
import Day35WithErrorBoundary from "./Day35";
import "../../Challenges.css";
import "./Challenge5.css";

function Challenges5() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 29 - 35</strong>
      </h1>
      <div className="week-container">
        <h2>This week I am working on:</h2>
        <p className="list-item2">
          <strong>React Router:</strong> Implement routing to navigate between pages.
        </p>
        <p className="list-item2">
          <strong>React Context:</strong> Use context to manage global state.
        </p>
        <p className="list-item2">
          <strong>Custom Hooks:</strong> Create and use custom hooks.
        </p>
        <p className="list-item2">
          <strong>State Management:</strong> Use advanced state management techniques.
        </p>
        <p className="list-item2">
          <strong>Code Splitting:</strong> Implement code splitting to improve performance.
        </p>
        <p className="list-item2">
          <strong>Error Handling:</strong> Handle errors in components and services.
        </p>
        <p className="list-item2">
          <strong>Data Fetching:</strong> Optimize API calls and fetch data efficiently.
        </p>
      </div>

      <div className="day-container">
        <Day29WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day30WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day31WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day32WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day33WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day34WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day35WithErrorBoundary />
      </div>
    </div>
  );
}

export default Challenges5;