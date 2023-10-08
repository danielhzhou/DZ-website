import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function Projects() {
  return (
    <div id = 'projectanchor' className='projects'>
        <h1>Projects:</h1>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/design-img1.jpg"
                    text="Designing an app to automate livestreaming for RLL"
                    />
                     <ProjectsItem
                    src="images/design-img2.jpg"
                    text="Designing website for Interact Ideathon"
                    />
                    <ProjectsItem
                    src="images/design-img5.jpg"
                    text="Creating optimal tic tac toe AI with Python  
                    (currently trying to understand MinMax to solve Connect 4)"
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
