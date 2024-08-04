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

      <div className="challenge">
        <h2>Day 15</h2>
        <Day15 />
      </div>

      <div className="challenge">
        <h2>Day 16</h2>
        <Day16 />
      </div>

      <div className="challenge">
        <h2>Day 17</h2>
        <Day17 />
      </div>

      <div className="challenge">
        <h2>Day 18</h2>
        <Day18 />
      </div>

      <div className="challenge">
        <h2>Day 19</h2>
        <Day19 />
      </div>

      <div className="challenge">
        <h2>Day 20</h2>
        <Day20 />
      </div>

      <div className="challenge">
        <h2>Day 21</h2>
        <Day21 />
      </div>
    </div>
  );
}

export default Challenges3;
