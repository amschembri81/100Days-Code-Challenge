import React, { Component } from 'react'; // Import React and Component from the React library

// Define the ErrorBoundary class component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props); // Call the parent class constructor
    // Initialize state to track error status and message
    this.state = { hasError: false, errorMessage: '' };
  }

  // Static method to update state when an error is caught
  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true, errorMessage: error.message };
  }

  // Lifecycle method to log error details
  componentDidCatch(error, errorInfo) {
    // Log the error and error information for debugging purposes
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  // Render method to display the component UI
  render() {
    // Check if there is an error in state
    if (this.state.hasError) {
      // Render fallback UI in case of an error
      return (
        <div className="error-container">
          <h2>Oops! Something went wrong. {"\u{1F61E}"}</h2>
          <p>{this.state.errorMessage}</p>
          <button onClick={() => this.setState({ hasError: false, errorMessage: '' })}>Try Again</button>
        </div>
      );
    }

    // If no error, render the child components
    return this.props.children;
  }
}

// Export the ErrorBoundary component for use in other parts of the application
export default ErrorBoundary;
