import React from 'react';

function ArtItem(props) {
  return (
    <>
    <li className="art__item">
        <div className="art__item_link">
            <figure className="art__item__pic-wrap" data-category={props.label}>
                <img src={props.src} alt="Image" 
                className="art__item__img"/>
            </figure>
            <div className="art__item__info">
                <h5 className="art__item__text">{props.text}</h5>
            </div>
        </div>
    </li>
    </>
  )
}

export default ArtItem
