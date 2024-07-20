import React from 'react';
import '../../App.css';
import Particle from '../Particle';
import myPhoto from '../../Assets/ContactPhoto.JPEG'; // Update this path as needed

function Contact() {
  return (
    <div className="contact-container">
      <Particle />
      <h1 className='contactme-header'>Contact Me</h1>
      <div className="contact-box">
        <img src={myPhoto} alt="Me" className="contact-photo" />
        <div className="contact-details">
          <p4><strong>Email:</strong> markiecegivens@outlook.com</p4>
          <p4><strong>Phone:</strong> 7029636636</p4>
          <p4><strong>Location:</strong> Las Vegas, NV</p4>
          <p4><strong>Willing to relocate?</strong> Anywhere</p4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
