import React from 'react';
import '../../App.css';
import Particle from '../Particle'; // Assuming you have a Particle component


function Contact() {
  return (
    <div className="contact-container">
      <Particle/>
      <h1 className='contactme-header'>Contact Me</h1>
      <div className="contact-box">
        <div className="contact-details">
          <p><strong>Email:</strong> markiecegivens@outlook.com</p>
          <p><strong>Phone:</strong> 7029636636</p>
          <p><strong>Location:</strong> Las Vegas, NV</p>
          <p><strong>Willing to relocate? </strong> Anywhere</p>
        </div>
      
      </div>
    </div>
  );
}

export default Contact;

