import React from "react";
import "../../Challenges.css"; 
import Day8 from './Day8'; 
import Day9 from './Day9'; 
import Day10 from './Day10'; 
import Day11 from './Day11'; 
import Day12 from './Day12'; 
import Day13 from './Day13'; 
import Day14 from './Day14'; 

function Challenge2() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 8 - 14</strong>
      </h1>

      <div className="challenge-container">
        <Day8 />
      </div>

      <div className="challenge-container">
        <Day9 />
      </div>

      <div className="challenge-container">
        <Day10 />
      </div>

      <div className="challenge-container">
        <Day11 />
      </div>

      <div className="challenge-container">
        <Day12 />
      </div>

      <div className="challenge-container">
        <Day13 />
      </div>

      <div className="challenge-container">
        <Day14 />
      </div>
    </div>
  );
}

export default Challenge2;