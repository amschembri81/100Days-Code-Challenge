import React, { useState } from 'react';

// Define the props interface to specify the structure of the incoming props
interface Props {
  facts: string[]; // An array of strings representing fun facts
}

// Create the TypeScriptComponent using React.FC (Functional Component) with Props interface
const TypeScriptComponent: React.FC<Props> = ({ facts }) => {
  // useState hook to store the currently displayed fact, initialized with the first fact in the array
  const [fact, setFact] = useState<string>(facts[0]);

  // Function to generate a random fact from the facts array
  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length); // Get a random index from the facts array
    setFact(facts[randomIndex]); // Update the state with the randomly selected fact
  };

  return (
    <div className="fact-container">
      {/* Heading for the Fun Fact Generator */}
      <h2>Random Fun Fact Generator</h2>
      <p>Click the button to generate a new fun fact!</p>

      {/* Display the current fact inside a box */}
      <div className="fact-box">
        <h3>{fact}</h3>
      </div>

      {/* Button to trigger the generation of a new random fact */}
      <button className="button" onClick={generateRandomFact}>
        Generate Fun Fact
      </button>
    </div>
  );
};

export default TypeScriptComponent;
