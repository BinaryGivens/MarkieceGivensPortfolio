import React from 'react';
import '../../App.css';
import Particle from '../Particle';
import myPhoto from '../../Assets/MarkieceFinal_3_Original.JPEG'; // Update this path as needed
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <Particle />
      <h1 className='contactme-header'><span className='highlight'>Contact</span> Me</h1>
      <div className="contact-box">
        <img src={myPhoto} alt="Me" className="contact-photo" />
        <div className="contact-details">
          <p4>Email: markiecegivens@outlook.com</p4>
          <p4>Phone: 7029636636</p4>
          <p4>Location: Las Vegas, NV</p4>
          <p4>Willing to relocate? Anywhere</p4>
        </div>
      </div>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/BinaryGivens"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons">
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/markiece-givens/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:markiecegivens@outlook.com"
            className="icon-colour  home-social-icons"
            aria-label='Email'>
            <FaEnvelope />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="tel:+17029636636"
            className="icon-colour home-social-icons"
            aria-label='Phone' >
            <FaPhone />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
