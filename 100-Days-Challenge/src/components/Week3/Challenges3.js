import React from "react";
import Day15 from "./Day15";
import Day16 from "./Day16";
import Day17 from "./Day17";
import Day18 from "./Day18";
import Day19 from "./Day19";
import Day20 from "./Day20";
import Day21 from "./Day21";
import "../Challenges.css";

function Challenges3() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 15 - 21</strong>
      </h1>

      <div className="week-container">
        <h2>This week I am working on:</h2>
        <ul className="bullet-list2">
          <li className="list-item">
            Class Components: Understand class components and their lifecycle
          </li>
          <li className="list-item">Event Propagation: Understand event propagation in React</li>
          <li className="list-item">Handling Forms: Validate and handle form submissions</li>
          <li className="list-item">
            React Hooks (useState): Replace class component state with useState
            hook
          </li>
          <li className="list-item">React Hooks (useEffect): Use useEffect hook for side effects</li>
          <li className="list-item">Context API: Implement a simple context provider and consumer</li>
          <li className="list-item">
            Higher-Order Components (HOC): Create and use a higher-order
            component
          </li>
        </ul>
      </div>

      <div className="challenge">
        <Day15 />
      </div>

      <div className="challenge">
        <Day16 />
      </div>

      <div className="challenge">
        <Day17 />
      </div>

      <div className="challenge">
        <Day18 />
      </div>

      <div className="challenge">
        <Day19 />
      </div>

      <div className="challenge">
        <Day20 />
      </div>

      <div className="challenge">
        <Day21 />
      </div>
    </div>
  );
}

export default Challenges3;
