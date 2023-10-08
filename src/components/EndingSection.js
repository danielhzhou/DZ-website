import React from 'react'
import './EndingSection.css'
import { Button } from './Button';

function EndingSection() {
  return (
    <div id = 'ending' className = 'abtme-container'>
      <h1 className = 'abtme'>What is this?</h1>
      <p className = 'abtme'>Hi! My name is Daniel, and this is a website I created from scratch -- meaning created NOT using cheatcodes like wix or squarespace. Initially, it was going to be just for my art portfolio, but upon creation, it can be so much more. Honestly, this is just a fun little personal project, so I hope you had some fun exploring!</p>
      <div className="abtme-btns">
        <Button to='#cardsanchor' className='btns' buttonStyle = 'btn--primary'
        buttonSize='btn--large'>my art
        </Button>
        <Button to='#cardsanchor' className='btns' buttonStyle = 'btn--primary'
        buttonSize='btn--large'>pictures 
        </Button>
      </div>
      <p className = 'ending'>You've reached THE END. Thank you so much for stopping by my website! I hope you learned a little bit more about me :)</p>
    </div>
  )
}

export default EndingSection
