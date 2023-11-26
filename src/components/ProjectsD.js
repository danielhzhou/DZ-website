import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsD() {
  return (
    <div id = 'projectanchor' className='projects'>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/c4.jpg"
                    text="Solving Connect 4:   
                    After an intense battle with my friend in Connect 4, I decided to create a Connect 4 Solver to understand the game better. After coding a simple minmax algorithm, I was able to obtain a better understanding of the game and finally defeat my friend."
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsD
