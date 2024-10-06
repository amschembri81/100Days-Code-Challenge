import React from "react";
import Day43WithErrorBoundary from "./Day43";
import Day44WithErrorBoundary from "./Day44";
import Day45WithErrorBoundary from "./Day45";
import Day46WithErrorBoundary from "./Day46";
import Day47WithErrorBoundary from "./Day47";
import Day48WithErrorBoundary from "./Day48";
import Day49WithErrorBoundary from "./Day49";
import "../../Challenges.css";
import "./Challenge7.css";

function Challenge7() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 43 - 49</strong>
      </h1>

      <div className="week-container">
        <h2>This week I am working on:</h2>
        <p className="list-item2">
          <strong>Day 43 - React Hooks (useContext):</strong> Use useContext for simpler context handling.
        </p>
        <p className="list-item2">
          <strong>Day 44 - Custom Hooks:</strong> Create and use custom hooks.
        </p>
        <p className="list-item2">
          <strong>Day 45 - Error Handling in Redux:</strong> Implement error handling in a Redux application.
        </p>
        <p className="list-item2">
          <strong>Day 46 - GraphQL Basics:</strong> Understand the basics of GraphQL.
        </p>
        <p className="list-item2">
          <strong>Day 47 - Apollo Client in React:</strong> Use Apollo Client to fetch data in React.
        </p>
        <p className="list-item2">
          <strong>Day 48 - React and D3 Integration:</strong> Integrate D3.js for data visualization.
        </p>
        <p className="list-item2">
          <strong>Day 49 - React and WebSocket:</strong> Implement real-time features using WebSockets.
        </p>
      </div>

      <div className="day-container">
        <Day43WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day44WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day45WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day46WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day47WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day48WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day49WithErrorBoundary />
      </div>
    </div>
  );
}

export default Challenge7;