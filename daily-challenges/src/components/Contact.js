import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="spaced-heading">Contact Page</h1>
      <div className="contact-details">
        <img src="/Me.png" alt="Amanda Schembri" className="profile-image" />
        <h3>Let's connect!</h3>
        <p>
          <a href="https://www.linkedin.com/in/amschembri/" target="_blank" rel="noopener noreferrer" className="contact-button">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="mailto:amschembri81@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-button">
            Email Me
          </a>
        </p>
        <p>
          <a href="/Amanda Schembri - FrontEndDevResume.pdf" target="_blank" rel="noopener noreferrer" className="contact-button">
            Download My Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;