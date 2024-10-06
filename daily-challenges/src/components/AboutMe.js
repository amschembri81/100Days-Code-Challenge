import React from "react";
import "../App.css";

function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div>
        <h1 className="spaced-heading">Hello! <span role="img" aria-label="woman waving">🙋🏻‍♀️</span> </h1>
          <h3>My name is Amanda Morrison.</h3>
        </div>
        <div className="aboutme">
          <p>
            As a former educator with over 15 years of experience, I bring a
            unique blend of instructional technology and user-centric design to
            the table. My journey from education to the tech world has been
            driven by a passion for creativity and innovation.
          </p>
          <p>
            With certifications in UI/UX Design and ongoing training in
            full-stack web development, I excel in crafting exceptional user
            experiences. My strong foundation in coding and front-end
            development allows me to seamlessly integrate design concepts into
            functional and intuitive interfaces. Additionally, my second
            master's degree in Integrative Leadership, with a focus on Design
            and Data Leadership, equips me with the skills to lead and inspire
            cross-functional teams.
          </p>
        </div>
        <h3 className="aboutheading">I specialize in:</h3>
        <div className="specialization-container">
          <ul className="specialization-list no-bullets">
            <li>
              <div className="specialization-item">
                <strong>Creating Accessible Designs: </strong> Ensuring
                inclusive and accessible digital experiences for all users,
                adhering to WCAG guidelines.
              </div>
            </li>
            <li>
              <div className="specialization-item">
                <strong>Content Strategy and Research: </strong> Utilizing data
                insights and agile methodologies to meet users' evolving needs.
              </div>
            </li>
            <li>
              <div className="specialization-item">
                <strong>Innovative UX Design: </strong> Creating intuitive
                interfaces that empower users and enhance their interaction with
                technology.
              </div>
            </li>
            <li>
              <div className="specialization-item">
                <strong>Ed-Tech and Non-Profit Projects: </strong> Bringing a
                deep understanding of the educational and non-profit sectors to
                deliver impactful solutions.
              </div>
            </li>
            <li>
              <div className="specialization-item">
                <strong>E-commerce Designs: </strong> Exploring and mastering
                new challenges outside my usual space to continuously grow and
                innovate.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="aboutheading">Skills:</h3>
          <ul className="skills-list">
            <li>
              <div>HTML/CSS/Javascript/React</div>
            </li>
            <li>
              <div>Front End Development</div>
            </li>
            <li>
              <div>User Experience (UX)</div>
            </li>
            <li>
              <div>User Interface (UI)</div>
            </li>
            <li>
              <div>Interaction Design</div>
            </li>
            <li>
              <div>Information Architecture</div>
            </li>
            <li>
              <div>Wireframing</div>
            </li>
            <li>
              <div>Prototyping</div>
            </li>
            <li>
              <div>Usability Testing</div>
            </li>
            <li>
              <div>User Research</div>
            </li>
            <li>
              <div>Human-Centered Design</div>
            </li>
            <li>
              <div>Persona Development</div>
            </li>
            <li>
              <div>User Flows</div>
            </li>
            <li>
              <div>Task Analysis</div>
            </li>
            <li>
              <div>Gamification</div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="aboutheading">Software:</h3>
          <ul className="skills-list">
            <li>
              <div>Visual Studio Code</div>
            </li>
            <li>
              <div>Sublime Text</div>
            </li>
            <li>
              <div>Atom</div>
            </li>
            <li>
              <div>Figma</div>
            </li>
            <li>
              <div>Sketch</div>
            </li>
            <li>
              <div>Azure</div>
            </li>
            <li>
              <div>Adobe CC</div>
            </li>
            <li>
              <div>Flash</div>
            </li>
            <li>
              <div>SnagIt</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutMe;