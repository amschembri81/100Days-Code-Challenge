import React, { createContext, useState } from 'react'; // Import React and hooks
import colorNames from 'color-name'; // Import color names for hex conversion

// Create a context for user profile
export const UserProfileContext = createContext();

// Function to convert hex color code to a color name
const getColorName = (hex) => {
  // Convert hex code to RGB
  const rgb = hex.substring(1).match(/.{2}/g).map(x => parseInt(x, 16)); // Extract RGB values from hex
  // Find the closest color name in the colorNames object
  const closestColor = Object.keys(colorNames).find(name => {
    const [r, g, b] = colorNames[name]; // Get RGB values for the color name
    return r === rgb[0] && g === rgb[1] && b === rgb[2]; // Check if they match
  });
  // Return the closest color name or the original hex code if no match found
  return closestColor || hex;
};

// UserProfileProvider component to manage user profile state
export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe', // Default user name
    favoriteColor: '#3498db', // Default favorite color
  });

  // Function to update user profile with new information
  const updateUserProfile = (newProfile) => {
    setUserProfile((prevProfile) => ({ ...prevProfile, ...newProfile })); // Merge new profile data with previous data
  };

  return (
    // Provide user profile state and update function to context consumers
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile, getColorName }}>
      {children} {/* Render children components */}
    </UserProfileContext.Provider>
  );
};
