import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
function HeroSection({ scrollToNext }) {
  return (
    <div className='hero-container'> 
      <h1>Engineering is the closest thing to magic that exists
        in the world </h1>
      <p>- Elon Musk</p>
      <div className="hero-btns">
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={scrollToNext}
        >
          Witness my magic
        </Button>
      </div>
    </div>
  );


}

export default HeroSection;
