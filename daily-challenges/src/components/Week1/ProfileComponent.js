import React from "react"; // Import React to create functional components

// Functional component to display user profile information
// Destructures the props to access name, job, and location directly
function ProfileComponent({ name, job, location }) {
  return (
    <div className="profile-container"> {/* Container div for profile styling */}
      <h2>User Profile</h2> {/* Section header */}
      {/* Display the user's name, job, and location */}
      <p><strong>Name:</strong> {name}</p> {/* Name field */}
      <p><strong>Job:</strong> {job}</p> {/* Job field */}
      <p><strong>Location:</strong> {location}</p> {/* Location field */}
    </div>
  );
}

export default ProfileComponent; // Export ProfileComponent for use in other parts of the app