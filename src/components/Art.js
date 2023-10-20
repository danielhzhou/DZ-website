import React from 'react';
import ArtItem from './ArtItem';
import './Art.css';

function Art() {
  return (
    <div id = 'artanchor' className='art'>
        <h1>my art:</h1>
        <div className="art__container">
            <div className="art__wrapper">
                <ul className="art__items">
                    <ArtItem
                    src="images/art-1.jpg"
                    text="the gree vase"
                    />
                     <ArtItem
                    src="images/art-2.jpg"
                    text="stoic man"
                    />
                    <ArtItem
                    src="images/art-3.jpg"
                    text="the mechanical part"
                    />
                </ul>
                <ul className="art__items">
                    <ArtItem
                    src="images/art-4.jpg"
                    text="flower stone carving"
                    />
                    <ArtItem
                    src="images/art-5.jpg"
                    text="mouthwatering m&ms"
                    />
                    <ArtItem
                    src="images/art-6.jpg"
                    text="fettered foliage"
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Art
