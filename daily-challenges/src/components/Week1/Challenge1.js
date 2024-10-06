import React from "react";
import "../../"; // This seems to be incomplete or incorrect. Ensure this path points to the correct location or file.
import './Challenge1.css'; // Importing the CSS file for styling the component.
import Day1 from './Day1';   // Importing Day1 component.
import Day2 from './Day2';   // Importing Day2 component.
import Day3 from './Day3';   // Importing Day3 component.
import Day4 from './Day4';   // Importing Day4 component.
import Day5 from './Day5';   // Importing Day5 component.
import Day6 from './Day6';   // Importing Day6 component.
import Day7 from './Day7';   // Importing Day7 component.

function Challenges() {
  // The main Challenges component, which renders Day1 to Day7 components inside it.
  return (
    <div className="Challenges">
      {/* The main heading for the challenges with custom spacing defined in CSS */}
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 1 - 7</strong>
      </h1>

      {/* Each Day component (from Day1 to Day7) is rendered inside individual divs with the class "challenge". 
          These divs are likely styled using CSS to structure or add spacing between the days. */}
      <div className="challenge">
        <Day1 />  {/* Day 1 challenge component */}
      </div>

      <div className="challenge">
        <Day2 />  {/* Day 2 challenge component */}
      </div>

      <div className="challenge">
        <Day3 />  {/* Day 3 challenge component */}
      </div>

      <div className="challenge">
        <Day4 />  {/* Day 4 challenge component */}
      </div>

      <div className="challenge">
        <Day5 />  {/* Day 5 challenge component */}
      </div>

      <div className="challenge">
        <Day6 />  {/* Day 6 challenge component */}
      </div>

      <div className="challenge">
        <Day7 />  {/* Day 7 challenge component */}
      </div>
    </div>
  );
}

export default Challenges;