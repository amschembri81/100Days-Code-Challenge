import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to the 100 Days of Code Challenge</h1>
      <p className="intro">
        I started this <i>100 Days of Code</i> challenge to push myself beyond
        my comfort zone and deepen my understanding of web development. After
        recently switching careers, I came across a simple code challenge using
        HTML and CSS and found it to be so much fun! This led me to enroll in an
        online coding bootcamp focused on full-stack web development, where I
        began learning React and React Native.
      </p>

      <p className="intro">
        I wanted to commit to daily practice to build strong, practical skills
        and gain hands-on experience with various concepts and technologies
        while also having fun. This journey is not just about learning to code;
        it’s about creating discipline, embracing challenges, and fostering a
        continuous growth mindset. Through consistent effort and perseverance,
        I’m excited to see the progress I can make and the projects I can bring
        to life.
      </p>

      <p>Here is the code challenge I'm following:</p>
      <a
        href="https://www.100daysofcode.io/learn/reactjs"
        target="_blank"
        rel="noopener noreferrer"
        className="external-link"
      >
        100 Days of Code ReactJS Challenge
      </a>

      <Link to="/challenges" className="homebutton">
        View My Work!
      </Link>
    </div>
  );
}

export default Home;
