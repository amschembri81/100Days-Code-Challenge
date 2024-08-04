import React from "react";
import Day15 from "./Day22";
import Day16 from "./Day23";
import Day17 from "./Day24";
import Day18 from "./Day25";
import Day19 from "./Day26";
import Day20 from "./Day27";
import Day21 from "./Day28";
import "../Challenges.css";

function Challenges4() {
  return (
    <div className="Challenges">
      <h1 className="spaced-heading">
        <strong>100 Days of Code - Challenges Days 22 - 28</strong>
      </h1>

      <div className="challenge">
        <h2>Day 22</h2>
        <Day15 />
      </div>

      <div className="challenge">
        <h2>Day 23</h2>
        <Day16 />
      </div>

      <div className="challenge">
        <h2>Day 24</h2>
        <Day17 />
      </div>

      <div className="challenge">
        <h2>Day 25</h2>
        <Day18 />
      </div>

      <div className="challenge">
        <h2>Day 26</h2>
        <Day19 />
      </div>

      <div className="challenge">
        <h2>Day 27</h2>
        <Day20 />
      </div>

      <div className="challenge">
        <h2>Day 28</h2>
        <Day21 />
      </div>
    </div>
  );
}

export default Challenges4;
