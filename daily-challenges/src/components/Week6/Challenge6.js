import React from "react";
import Day36WithErrorBoundary from "./Day36";
import Day37WithErrorBoundary from "./Day37";
import Day38WithErrorBoundary from "./Day38";
import Day39WithErrorBoundary from "./Day39";
import Day40WithErrorBoundary from "./Day40";
import Day41WithErrorBoundary from "./Day41";
import Day42WithErrorBoundary from "./Day42";
import "../../Challenges.css";
import "./Challenge6.css";

function Challenge6() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 36 - 42</strong>
      </h1>

      <div className="week-container">
        <h2>This week I am working on:</h2>
        <p className="list-item2">
          <strong>Day 36 - Async Operations in Redux:</strong> Handle asynchronous operations using Redux Thunk.
        </p>
        <p className="list-item2">
          <strong>Day 37 - Immutable Data in Redux:</strong> Understand and use immutable data in Redux.
        </p>
        <p className="list-item2">
          <strong>Day 38 - Redux DevTools:</strong> Integrate and use Redux DevTools for debugging.
        </p>
        <p className="list-item2">
          <strong>Day 39 - Routing with React Router:</strong> Implement nested routes and route parameters.
        </p>
        <p className="list-item2">
          <strong>Day 40 - Code Splitting:</strong> Split code for better performance using React.lazy.
        </p>
        <p className="list-item2">
          <strong>Day 41 - Higher-Order Components (HOC) Patterns:</strong> Explore advanced patterns with HOCs.
        </p>
        <p className="list-item2">
          <strong>Day 42 - Render Props:</strong> Use render props to share code between components.
        </p>
      </div>

      <div className="day-container">
        <Day36WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day37WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day38WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day39WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day40WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day41WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day42WithErrorBoundary />
      </div>
    </div>
  );
}

export default Challenge6;