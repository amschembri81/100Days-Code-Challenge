import React from "react";
import Day22WithErrorBoundary from "./Day22";
import Day23WithErrorBoundary from "./Day23";
import Day24WithErrorBoundary from "./Day24";
import Day25WithErrorBoundary from "./Day25";
import Day26WithErrorBoundary from "./Day26";
import Day27WithErrorBoundary from "./Day27";
import Day28WithErrorBoundary from "./Day28";
import "../../Challenges.css";
import "./Challenge4.css";

function Challenges4() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 22 - 28</strong>
      </h1>
      <div className="week-container">
  <h2>This week I am working on:</h2>
  <p className="list-item2">
    <strong>Error Boundaries:</strong> Implement error boundaries to handle errors gracefully.
  </p>
  <p className="list-item2">
    <strong>React Portals:</strong> Use portals to render children outside their parent DOM hierarchy.
  </p>
  <p className="list-item2">
    <strong>Optimizing Performance:</strong> Optimize rendering using PureComponent and memo.
  </p>
  <p className="list-item2">
    <strong>PropTypes:</strong> Add PropTypes to validate component props.
  </p>
  <p className="list-item2">
    <strong>Refs in React:</strong> Use refs to interact with the DOM.
  </p>
  <p className="list-item2">
    <strong>React Testing Library:</strong> Write basic tests using React Testing Library.
  </p>
  <p className="list-item2">
    <strong>Axios and API Calls:</strong> Make API calls using Axios.
  </p>
</div>

      <div className="day-container">
        <Day22WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day23WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day24WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day25WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day26WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day27WithErrorBoundary />
      </div>

      <div className="day-container">
        <Day28WithErrorBoundary />
      </div>
    </div>
  );
}

export default Challenges4;