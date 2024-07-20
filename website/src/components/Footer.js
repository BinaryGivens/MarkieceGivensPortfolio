import React from 'react';
import './Footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-description">
        <h3 className="footer-description-heading">
          <span className='highlight'>Connect</span>
        </h3>
        <p1 className="footer-description-paragraph">
          Feel free to reach out to me
        </p1>
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
            </ul>
      </section>
    </div>
  );


}

export default Footer;
