import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsD() {
  return (
    <div className='projects'>
      <h2>Connect 4 Solver</h2>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/c4.jpg"
                    text="   
                    After an intense battle with my friend in Connect 4, 
                    I decided to create a Connect 4 Solver to understand 
                    the game better. After coding a simple minmax 
                    algorithm, I was able to obtain a better 
                    understanding of the game and finally defeat my 
                    friend. The algorithm looks through all possible moves in a Connect 4 game 
                    and determines which move is best. I hope to implement alpha beta pruning in the future to decrease computation time."
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsD
