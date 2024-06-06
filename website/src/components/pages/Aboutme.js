import React from 'react';
import '../../App.css';
import aboutMarkiece from '../../Assets/about-markiece.JPEG';

function Aboutme() { 
  return (
    <>
      <div className="main-head">
            <h1>Meet Markiece Givens</h1>
      </div>
      <div className="aboutme-container">
        <div className="text-container">
          <div className="header">
              <h1>Meet Markiece Givens</h1>
          </div>
          <div className="header-body">
            <p>
              I am a dedicated physicist, researcher, software developer, 
              autonomous vehicle tester, and father. I gained my experience as a researcher from
              the University of Nevada, Las Vegas where I researched astrophysical outflows
              as well as low dimensional materials. After gaining 2 years of experience as a
              researcher, I moved on to Autonomous vehicle testing. Since starting AV testing
              in 2022, I was introduced to an encapsulating industry where I gained first hand
              experience in troubleshooting AV software in Linux, JIRA, deploying software
              and working 1 on 1 with engineers to solve ongoing software issues.
            </p>
          </div>
          <div className="header3">
            <h2>Where do I thrive?</h2>
          </div>
          <div className="header3-body">
            <p>
              As a hardworking and innovative individual, I thrive in positions where there is a lot to learn.
              My eagerness to tackle problems and unknowns in my field as part of a team or 
              independently will allow me to grow exponentially in any field regardless of my
              experience.
            </p>
          </div>
          <div className="header2">
            <h2>Why should you consider adding me to your team?</h2>
          </div>
          <div className="header2-body">
            <p>
              My dedication and hard work is demonstrated by my ability 
              to juggle full-time work, school, and a family while maintaining above a
              3.0 GPA. Adding me to a team is a way to bring innovative and abstract ideas
              to the table as my interdisciplinary education allows me to reference multiple
              subject branches to reach conclusions.
            </p>
          </div>
        </div>
        <div className="about-photo">
          <img src={aboutMarkiece} alt="photo of me" />
        </div>
      </div>
    </>
  );
}

export default Aboutme;
