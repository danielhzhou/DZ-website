import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id = 'homeanchor' className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>Hello</h1>
      <p>welcome to my personal website!</p>
      <div className="hero-btns">
        <Button to='#cardsanchor' className='btns' buttonStyle = 'btn--outline'
        buttonSize='btn--large'>about me
        </Button>
        <Button to='#projectanchor' className='btns' buttonStyle = 'btn--primary'
        buttonSize='btn--large'>projects <i className='fa fa-microchip' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
