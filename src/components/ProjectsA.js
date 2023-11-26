import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsA() {
  return (
    <div id="projectanchor" className="projects">
      <h1>Coding Projects:</h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectsItem
              src="images/design-img1.jpg"
              text="Designing an app to automate livestreaming for RLL: Leading a team of 6 members, we are currently working on a web app that will automatically create youtube livestreams, thumbnails, and schedule streams by reading on a given csv file that holds information about the baseball games. We are also tasked with creating a working account system, secure hosting to the internet, and functions to delete and edit streams utilizing Youtube API."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsA;
