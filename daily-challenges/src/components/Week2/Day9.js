import React, { useState } from "react"; // Import React and useState hook to manage state
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display information for the current day
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 9

function Day9() {
  // useState hooks to manage the form input values and submitted data
  const [name, setName] = useState(""); // State for storing the entered name
  const [message, setMessage] = useState(""); // State for storing the entered message
  const [submittedData, setSubmittedData] = useState({}); // State for storing submitted form data

  // Handle form submission and prevent the default form behavior
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setSubmittedData({ name, message }); // Update submittedData with the current name and message
  };

  return (
    <div className="day-container"> {/* Container div for Day 9 */}
      <h1>Day 9 - Handling Forms</h1> {/* Title for the challenge */}

      {/* Display day-specific information using the DayInfoComponent */}
      <DayInfoComponent
        date="August 1, 2024" // Date of the challenge
        dayNumber="Day 9" // Current day number
        challenge="Handle form input and submission" // Description of the challenge
        message="Learn how to handle forms!" // A message for the day
      />

      {/* Form for collecting name and message inputs */}
      <form onSubmit={handleSubmit}> {/* Form submission triggers handleSubmit */}
        {/* Input field for name */}
        <input className="input"
          type="text"
          placeholder="Enter your name"
          value={name} // Bind input value to the name state
          onChange={(e) => setName(e.target.value)} // Update name state when input changes
        />
        {/* Input field for message */}
        <input className="input"
          type="text"
          placeholder="Enter your message"
          value={message} // Bind input value to the message state
          onChange={(e) => setMessage(e.target.value)} // Update message state when input changes
        />
        {/* Submit button */}
        <button className="button" type="submit">Submit</button> {/* Submit the form */}
      </form>

      {/* Conditionally render the submitted data if the name has been entered */}
      {submittedData.name && ( 
        <div> {/* Display submitted name and message after form submission */}
          <h3>Your Submission</h3>
          <p>Name: {submittedData.name}</p> {/* Display the submitted name */}
          <p>Message: {submittedData.message}</p> {/* Display the submitted message */}
        </div>
      )}
    </div>
  );
}

export default Day9;