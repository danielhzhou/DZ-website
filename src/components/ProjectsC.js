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
                    I co-hosted the Interact Ideathon, which was an 
                    event dedicated to promote action in the field of 
                    destigmatizing therapy. My role in the event was to 
                    create a website that provided participants with 
                    crucial information to continue their projects. This 
                    website also allowed volunteers recieve credit for 
                    their service."
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsC
