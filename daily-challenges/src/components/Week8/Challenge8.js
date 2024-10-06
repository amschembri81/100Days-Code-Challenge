import React from "react";
import Day50WithErrorBoundary from "./Day50";
import Day51WithErrorBoundary from "./Day51";
import Day52WithErrorBoundary from "./Day52";
import Day53WithErrorBoundary from "./Day53";
import Day54WithErrorBoundary from "./Day54";
import Day55WithErrorBoundary from "./Day55";
import Day56WithErrorBoundary from "./Day56";
import "../../Challenges.css";
import "./Challenge8.css";

function Challenge8() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 50 - 56</strong>
      </h1>

      <div className="week-container">
        <h2>This week I am working on:</h2>
        <p className="list-item2">
          <strong>Day 50 - Progressive Web Apps (PWA):</strong> Convert a React app into a Progressive Web App.
        </p>
        <p className="list-item2">
          <strong>Day 51 - React and Firebase:</strong> Integrate Firebase for authentication and database.
        </p>
        <p className="list-item2">
          <strong>Day 52 - React and TypeScript:</strong> Set up a React project with TypeScript.
        </p>
        <p className="list-item2">
          <strong>Day 53 - React Hooks (useReducer):</strong> Use useReducer for complex state logic.
        </p>
        <p className="list-item2">
          <strong>Day 54 - React Suspense and Lazy:</strong> Implement React Suspense and Lazy for data fetching.
        </p>
        <p className="list-item2">
          <strong>Day 55 - React Performance Optimization:</strong> Optimize performance using React.memo and useMemo.
        </p>
        <p className="list-item2">
          <strong>Day 56 - React Testing Library Advanced:</strong> Write more complex tests with React Testing Library.
        </p>
      </div>

      <div className="day-container">
        <Day50WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day51WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day52WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day53WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day54WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day55WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day56WithErrorBoundary />
      </div>
    </div>
  );
}

export default Challenge8;