import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsB() {
  return (
    <div id = 'projectanchor' className='projects'>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/todolist.jpg"
                    text="To-do list with a twist:   
                    This website was my team's submission for the 
                    2023 Hack the Wave Hackathon. It is a to do list 
                    website that randomly adds extra tasks when users 
                    try to delete their current tasks. For this website,
                     I worked on the task manager itself as well as the
                      random tasks that pop up when the user clicks the
                       trash icon. Credit to javascriptbear for the 
                       initial design."
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsB
