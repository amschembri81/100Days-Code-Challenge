import React from "react";
import "../Challenges.css";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";

function Challenges() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 1 - 7</strong>
      </h1>

      <div className="challenge">
        <Day1 />
      </div>

      <div className="challenge">
        <Day2 />
      </div>

      <div className="challenge">
        <Day3 />
      </div>

      <div className="challenge">
        <Day4 />
      </div>

      <div className="challenge">
        <Day5 />
      </div>

      <div className="challenge">
        <Day6 />
      </div>

      <div className="challenge">
        <Day7 />
      </div>
    </div>
  );
}

export default Challenges;
