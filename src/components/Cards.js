import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div id = 'cardsanchor' className='cards'>
        <h1>I like:</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/profile-img6.jpg"
                    text="playing connect 4 "
                    />
                     <CardItem
                    src="images/card-img8.jpg"
                    text="drawing"
                    />
                    <CardItem
                    src="images/card-img7.jpg"
                    text="eating good food :)"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="images/card-img4.jpg"
                    text="hiking on tall mountains"
                    />
                    <CardItem
                    src="images/card-img1.jpg"
                    text="listening to kr&b and keshi"
                    />
                    <CardItem
                    src="images/card-img3.jpg"
                    text="the beautiful sky"
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
