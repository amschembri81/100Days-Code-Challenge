import React from "react";
import Day64WithErrorBoundary from "./Day64"; // Import the Day 64 component
import Day65WithErrorBoundary from "./Day65"; // Import the Day 65 component
import Day66WithErrorBoundary from "./Day66"; // Import the Day 66 component
import Day67WithErrorBoundary from "./Day67"; // Import the Day 67 component
import Day68WithErrorBoundary from "./Day68"; // Import the Day 68 component
import Day69WithErrorBoundary from "./Day69"; // Import the Day 69 component
import Day70WithErrorBoundary from "./Day70"; // Import the Day 70 component
import "../../Challenges.css"; // Import general challenges styles
import "./Challenge10.css"; // Import specific styles for Challenge 10

function Challenge10() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 64 - 70</strong>
      </h1>

      <div className="week-container">
        <h2>This week I am working on:</h2>
        <p className="list-item2">
          <strong>Day 64 - React and Electron:</strong> Build a desktop application using React and Electron.
        </p>
        <p className="list-item2">
          <strong>Day 65 - React and Webpack:</strong> Customize Webpack configuration for a React project.
        </p>
        <p className="list-item2">
          <strong>Day 66 - React Suspense with Concurrent Mode:</strong> Explore Concurrent Mode with React Suspense.
        </p>
        <p className="list-item2">
          <strong>Day 67 - Internationalization (i18n) in React:</strong> Add internationalization support to a React app.
        </p>
        <p className="list-item2">
          <strong>Day 68 - React and Material-UI:</strong> Integrate Material-UI for UI components.
        </p>
        <p className="list-item2">
          <strong>Day 69 - Serverless Functions with React:</strong> Deploy serverless functions with a React app.
        </p>
        <p className="list-item2">
          <strong>Day 70 - React and Headless CMS:</strong> Integrate a headless CMS with a React app.
        </p>
      </div>

      <div className="day-container">
        <Day64WithErrorBoundary /> {/* Render Day 64 component */}
      </div>

      <div className="day-container">
        <Day65WithErrorBoundary /> {/* Render Day 65 component */}
      </div>

      <div className="day-container">
        <Day66WithErrorBoundary /> {/* Render Day 66 component */}
      </div>

      <div className="day-container">
        <Day67WithErrorBoundary /> {/* Render Day 67 component */}
      </div>

      <div className="day-container">
        <Day68WithErrorBoundary /> {/* Render Day 68 component */}
      </div>

      <div className="day-container">
        <Day69WithErrorBoundary /> {/* Render Day 69 component */}
      </div>

      <div className="day-container">
        <Day70WithErrorBoundary /> {/* Render Day 70 component */}
      </div>
    </div>
  );
}

export default Challenge10; // Export the Challenge10 component
