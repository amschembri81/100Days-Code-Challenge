import React, { Component } from 'react'; // Import React and Component from React library

class LifecycleDemo extends Component {
  constructor(props) {
    super(props); // Call the parent constructor
    this.state = {
      counter: 0, // Initialize state with a counter set to 0
    };
    console.log('Constructor: Component is being created'); // Log when the constructor runs
  }

  // Lifecycle method called after the component is mounted
  componentDidMount() {
    console.log('ComponentDidMount: Component has been mounted'); // Log when the component is mounted
  }

  // Lifecycle method called when the component updates
  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component has been updated'); // Log when the component updates
  }

  // Lifecycle method called before the component is unmounted
  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is being unmounted'); // Log when the component is unmounted
  }

  // Method to increment the counter
  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 })); // Increment the counter by 1
  };

  // Render method to display the component
  render() {
    console.log('Render: Component is being rendered'); // Log when the render method runs
    return (
      <div className="lifecycle">
        <h2>Lifecycle Demo Component</h2>
        <p>Counter: {this.state.counter}</p> {/* Display the current counter value */}
        <button onClick={this.incrementCounter} className="button"> {/* Button to increment the counter */}
          Increment Counter
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
