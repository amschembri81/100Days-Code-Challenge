import React from "react";
import Day15 from './Day15';
import Day16 from './Day16';
import Day17 from './Day17';
import Day18 from './Day18';
import Day19 from './Day19';
import Day20 from './Day20';
import Day21 from './Day21';
import "../../Challenges.css";
import "./Challenge3.css";

function Challenge3() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 15 - 21</strong>
      </h1>

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

export default Challenge3;