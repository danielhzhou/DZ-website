import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsE() {
  return (
    <div id="projectanchor" className="projects">
      <h1>Community Service Projects:</h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectsItem
              src="images/eagleproject.jpg"
              text="Eagle Project: For my Eagle Project, I lead a team of 21 volunteers to build a retaining wall made of railroad ties and metal rebars at Southern California Livesteamers (nonprofit). In order to address safety issues and make the site look better, I utilized a chainsaw and powerdrills to make this wall possible. Over 200 hours of community service was spent on this project."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsE;
