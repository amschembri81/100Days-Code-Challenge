import React, { Component } from "react"; // Import React and Component class for creating class components
import DayInfoComponent from "../DayInfoComponent"; // Import DayInfoComponent to display day-specific information
import "../../Challenges.css"; // Import global CSS for styling
import "./Challenge2.css"; // Import specific CSS for Day 11

class Day11 extends Component {
  // Define the initial state
  state = {
    messageIndex: 0, // Tracks the current index of the messages array
    messages: [
      "Let's code!",
      "You're making progress!",
      "Don't give up!",
      "Stay focused and keep coding!",
    ], // Array of motivational messages
    lifecycleEvent: "Component not mounted yet", // State to track the lifecycle event
  };

  // componentDidMount lifecycle method is invoked after the component is mounted
  componentDidMount() {
    this.setState({
      lifecycleEvent: "Component mounted - Ready to go!", // Update state to reflect that the component has mounted
    });
    console.log("Component mounted"); // Log message to console
  }

  // componentDidUpdate lifecycle method is invoked after the component is updated
  componentDidUpdate(prevProps, prevState) {
    // Check if messageIndex has changed to avoid unnecessary updates
    if (prevState.messageIndex !== this.state.messageIndex) {
      this.setState({
        lifecycleEvent: "Component updated - Message changed!", // Update lifecycleEvent when the message changes
      });
      console.log("Component updated"); // Log message to console
    }
  }

  // componentWillUnmount lifecycle method is invoked just before the component is removed from the DOM
  componentWillUnmount() {
    console.log("Component will unmount"); // Log message to console when the component is about to unmount
  }

  render() {
    const { messageIndex, messages, lifecycleEvent } = this.state; // Destructure state values for easy access
    return (
      <div className="day-container"> {/* Container for Day 11 challenge */}
        <h1>Day 11 - Component Lifecycle</h1> {/* Title for the challenge */}

        {/* Display the current lifecycle event status */}
        <div className="lifecycle-status">
          <h2>{lifecycleEvent}</h2> {/* Display lifecycle event message */}
        </div>

        {/* Display day-specific information using DayInfoComponent */}
        <DayInfoComponent
          date="August 3, 2024" // Date of the challenge
          dayNumber="Day 11" // Current day number
          challenge="Understand and use lifecycle methods" // Description of the challenge
          message={messages[messageIndex]} // Current message to display based on messageIndex
        />

        {/* Button to change the message by incrementing the messageIndex */}
        <button
          className="button"
          onClick={() =>
            this.setState({
              messageIndex: (messageIndex + 1) % messages.length, // Update messageIndex and cycle through the messages array
            })
          }
        >
          Change Message
        </button>
      </div>
    );
  }
}

export default Day11;