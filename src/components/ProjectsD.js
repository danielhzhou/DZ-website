import React from 'react';
import ProjectsItem from './ProjectsItem';
import './Projects.css';

function ProjectsD() {
  return (
    <div className='projects'>
      <h2>Bioinformatics Coding Project</h2>
        <div className="projects__container">
            <div className="projects__wrapper">
                <ul className="projects__items">
                    <ProjectsItem
                    src="images/Bioinformatics.png"
                    text=" To ensure proper bioinformatics work for USC's ChenLab, I performed RNA Seq analysis on a publicly available dataset provided by Dr. Bai Li on the vagal sensory neurons of mice in order to compare my findings to his. I utilized the Seurat package in R to do this analysis and cell clustering, and utilized a multitude of strategies, including differential expression analysis, PCA analysis, and Fisher's T-Test. I visualized 1316 marker genes and compared my work with Dr. Li's paper." 
                    
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default ProjectsD
