import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsG() {
  return (
    <div id="projectanchor" className="projects">
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectsItem
              src="images/techakids.jpg"
              text="As volunteer coordinator for Techakids, 
              I recruit 3+ volunteers each year, on top of helping 
              to teach classes of 40+ students. Techakids aims to make 
              STEAM education accessible for underpriveleged elementary 
              schoolers, providing them with classes like 3D printing, 
              drone coding, robot coding, and much more. I have obtained 
              the Presidential Service Award for volunteering over 160 
              hours for Techakids. "
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsG;
