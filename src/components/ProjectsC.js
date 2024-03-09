import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsC() {
  return (
    <div className='projects'>
      <h2>Designing Website For Interact Ideathon</h2>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/design-img2.jpg"
                    text=" 
                    "
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsC
