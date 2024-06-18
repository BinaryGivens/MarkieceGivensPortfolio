import React from 'react';
import '../../App.css';
import aboutMarkiece from '../../Assets/about-markiece.JPEG';
import Particle from '../Particle'; // Assuming you have a Particle component


function Aboutme() { 
  return (
    <>
      <div className="aboutme-container">
        <Particle/>
        <div className="text-container">
          <div className="header">
              <h1>Meet Markiece Givens</h1>
          </div>
          <div className="header-body">
            <p>
              I am a dedicated physicist, researcher, software developer, 
              autonomous vehicle tester, and father. I gained my experience as a researcher from
              the University of Nevada, Las Vegas where I researched astrophysical outflows
              as well as 3D materials in low dimensional devices. After gaining 2 years of experience as a
              researcher, I moved on to Autonomous vehicle testing. Since starting AV testing
              in 2022, I was introduced to an encapsulating industry where I gained first hand
              experience in JIRA, deploying software, working 1 on 1 with engineers to solve ongoing software issues
              and troubleshooting AV software in Linux.
            </p>
          </div>
          <div className="header3">
            <h2>Where do I thrive?</h2>
          </div>
          <div className="header3-body">
            <p>
              As a hardworking and innovative individual, I thrive in positions where there is a lot to learn.
              My eagerness to tackle problems and unknowns in any field as part of a team or 
              independently will allow me to grow exponentially in any field regardless of my
              experience.
            </p>
          </div>
          <div className="header2">
            <h2>Work Values</h2>
          </div>
          <div className="header2-body">
            <p>
              I believe that hard-work, dedication and discipline are the stepping stones to success.
              I apply these stepping stones to any work I set my mind to in order to be successful in all
              endeavors. My dedication, hard-work and discipline are demonstrated by my ability to juggle 
              full-time work, school, and a family while maintaining above a 3.0 GPA. 
            </p>
          </div>
        </div>
        <div className="about-photo">
          <img src={aboutMarkiece} alt="visual of me" />
        </div>
      </div>
      <div className='aboutme-container2'>
        <Particle/>
        <div className='Next section'>
        <h2 className='header'>
          Skills
        </h2>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
