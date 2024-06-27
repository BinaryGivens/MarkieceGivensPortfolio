import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Get to know Markiece Givens more</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Journey to the About Me page to find out more about me and my story'
              label='About Me'
              path='/aboutme'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Take a look at my work experience, education and skills on the Resume page
                    and feel free to download my resume!'
              label='Resume'
              path='/resume'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;