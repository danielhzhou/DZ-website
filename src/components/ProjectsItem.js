// ProjectsItem.js

import React from 'react';

function ProjectsItem(props) {
  return (
    <li className="projects__item">
      <div className="projects__item__link">
        <figure className="projects__item__pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Image" className="projects__item__img" />
        </figure>
        <div className="projects__item__info">
          <h5 className="projects__item__text">{props.text}</h5>
        </div>
      </div>
    </li>
  );
}

export default ProjectsItem;
