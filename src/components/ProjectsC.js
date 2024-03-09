import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsC() {
  return (
    <div className='projects'>
      <h2>DNA Analysis App</h2>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/DNA.png"
                    text="With the course Bioinformatics in Python by RebelCoder on Youtube, I was able to program a DNA analysis app that mimics the human body to determine the corresponding protein through transcription and translation. The app also finds other important information such as GC content, which is useful in bioinformatics DNA analysis. I utilized Flask to create a backend API for this app."
                    
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsC
