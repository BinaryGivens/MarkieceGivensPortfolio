import React from 'react';
import '../../App.css';
import aboutMarkiece from '../../Assets/about-markiece.JPEG';
import Particle from '../Particle'; // Assuming you have a Particle component
import CodingStack from '../CodingStack';

function Aboutme() { 
  return (
    <>
      <div className="aboutme-container">
        <Particle/>
        <div className="text-container">
          <div className="header">
              <h1>Meet Markiece Givens</h1>
          </div>
          <div>
            <p>
              I am a dedicated physicist, researcher, software developer, 
              autonomous vehicle tester, and father. I gained my experience as a researcher from
              the University of Nevada, Las Vegas where I researched astrophysical outflows
              as well as 3D materials in low dimensional devices. After gaining 3 years of experience as a
              researcher, I moved on to Autonomous vehicle testing. Since starting AV testing
              in 2022, I was introduced to an encapsulating industry where I gained first hand
              experience in JIRA, deploying software, working 1 on 1 with engineers to solve ongoing software issues
              and troubleshooting AV software in Linux.
            </p>
          </div>
          <div className="header3">
            <h2>Education Background</h2>
          </div>
          <div>
            <p>
              I attended the University of Nevada, Las Vegas where I completed 159 undergraduate
              credits to achieve a dual-degree in Physics and Computer Science with a 3.19 GPA.
               Starting August 2024 I will be pursuing a M.S in CS at UNLV.
            </p>
          </div>
          <div>
            <h2>Work Values</h2>
          </div>
          <div>
            <p className='firstContainerEnd'>
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
        <div className='coding-language-container'>
          <h3 className='coding-languages-header' style={{fontSize: '3.5em'}}>
            Coding Languages I know
          </h3>
          <CodingStack />
        </div>
        {/* <div className='coding-language-container'>
          <h3 className='coding-languages-header' style={{fontSize: '3.5em'}}>
            Data Analyst Processes I know
          </h3>
          <DataStack />
        </div>
        <div className='research-container'>
          <h3 className='research-header' style={{fontSize: '3.5em'}}>
            What do I know about research?
          </h3>
          <p className='research'>
            in my experience as a researcher at the University of Nevada, Las Vegas
            I would focus on tasks given to me and in weekly meetings I would summarize
            my findings and prepare presenations with visualizations on my progress. In my time as
            a researcher at UNLV I learned how to collaborate with others as well as present findings
            to a team of scientists. I also learned how to work independently but also how to work as a 
            team to tackle difficult problems to come up with innovative solutions.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Aboutme;
