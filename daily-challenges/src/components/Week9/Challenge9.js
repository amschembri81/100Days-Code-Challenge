import React from "react";
import Day57WithErrorBoundary from "./Day57";
import Day58WithErrorBoundary from "./Day58";
import Day59WithErrorBoundary from "./Day59";
import Day60WithErrorBoundary from "./Day60";
import Day61WithErrorBoundary from "./Day61";
import Day62WithErrorBoundary from "./Day62";
import Day63WithErrorBoundary from "./Day63";
import "../../Challenges.css";
import "./Challenge9.css";

function Challenge9() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 57 - 63</strong>
      </h1>

      <div className="week-container">
        <h2>This week I am working on:</h2>
        <p className="list-item2">
          <strong>Day 57 - Storybook for React:</strong> Use Storybook for component development and testing.
        </p>
        <p className="list-item2">
          <strong>Day 58 - Jest Snapshot Testing:</strong> Implement snapshot testing with Jest.
        </p>
        <p className="list-item2">
          <strong>Day 59 - CSS-in-JS Libraries:</strong> Use CSS-in-JS libraries like styled-components or emotion.
        </p>
        <p className="list-item2">
          <strong>Day 60 - Progressive Enhancement in React:</strong> Implement progressive enhancement strategies.
        </p>
        <p className="list-item2">
          <strong>Day 61 - Web Accessibility (A11y):</strong> Ensure accessibility in a React application.
        </p>
        <p className="list-item2">
          <strong>Day 62 - Server-Side Rendering (SSR):</strong> Set up server-side rendering for a React app.
        </p>
        <p className="list-item2">
          <strong>Day 63 - React and Redux Middleware:</strong> Implement custom middleware in Redux.
        </p>
      </div>

      <div className="day-container">
        <Day57WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day58WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day59WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day60WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day61WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day62WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day63WithErrorBoundary />
      </div>
    </div>
  );
}

export default Challenge9;