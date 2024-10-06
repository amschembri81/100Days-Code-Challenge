import React from 'react';
import './Button.css'; 


export const Button = ({ text, onClick }) => (
  <button className="common-button" onClick={onClick}>
    {text}
  </button>
);