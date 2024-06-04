import React from 'react';
import {Button} from './Button'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-description">
        <p className="footer-description-heading">
          Reach out to me if you believe I would be a good addition
          to your team.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'> Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );


}

export default Footer;
