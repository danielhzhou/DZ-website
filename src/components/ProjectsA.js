import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsA() {
  return (
    <div id="projectanchor" className="projects">
      <h1>Coding Projects:</h1>
      <h2>Auto-Livestreaming App for Rivera Little League (RLL)</h2>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectsItem
              src="images/design-img1.jpg"
              text="
               Leading a team of 6 members, I am working on a web app and backend api utilizing React, Javascript, Flask, Python, Youtube API, and Google OAuth to automate 400+ streams/year for Riviera Little League. Translated livestreaming product requirements to technical specifications, designing a robust end-to-end system.
               Utilized React, Javascript, Flask, and Python for development in order to best utilize the skills of my team to meet product requirements.
               Developed frontend web interface and functionalities, including a file upload system (for little league schedule), adaptive stream display, and stream deletion features.
               Integrated Google OAuth for user identification and worked with team members to create automatic thumbnail generator and automatic livestream creator with Youtube API.
               Hosted frontend and backend on Amazon Web Services.
               Implemented cybersecurity protocols to secure connections and protect sensitive data.
               "
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsA;
