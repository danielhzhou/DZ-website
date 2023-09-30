import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>Hello</h1>
      <p>welcome to my personal website!</p>
      <div className="hero-btns">
        <Button to='/services' className='btns' buttonStyle = 'btn--outline'
        buttonSize='btn--large'>about me
        </Button>
        <Button to='/products' className='btns' buttonStyle = 'btn--primary'
        buttonSize='btn--large'>projects<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
