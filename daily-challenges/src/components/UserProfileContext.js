import React, { createContext, useState } from 'react'; // Import necessary React functions and libraries
import colorNames from 'color-name'; // Import a library to get color names based on RGB values

// Create a Context for User Profile
export const UserProfileContext = createContext();

// Function to get the closest color name based on a hex code
const getColorName = (hex) => {
  // Convert hex code to RGB
  const rgb = hex.substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
  
  // Find the closest color name in the colorNames object
  const closestColor = Object.keys(colorNames).find(name => {
    const [r, g, b] = colorNames[name];
    return r === rgb[0] && g === rgb[1] && b === rgb[2]; // Match RGB values
  });
  
  // Return the closest color name or fallback to the hex code if no match is found
  return closestColor || `Unknown color: ${hex}`;
};

// UserProfileProvider component that wraps around children components
export const UserProfileProvider = ({ children }) => {
  // State to hold user profile information
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe', // Default name
    favoriteColor: '#3498db', // Default color
  });

  // Function to update the user profile with new information
  const updateUserProfile = (newProfile) => {
    // Merge new profile data with existing data
    setUserProfile((prevProfile) => ({ ...prevProfile, ...newProfile }));
  };

  return (
    // Provide userProfile and updateUserProfile to children components
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile, getColorName }}>
      {children} {/* Render child components */}
    </UserProfileContext.Provider>
  );
};
