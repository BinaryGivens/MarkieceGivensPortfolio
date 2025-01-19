import React from 'react';
import '../../App.css';
import aboutMarkiece from '../../Assets/about-markiece.JPEG';
import Particle from '../Particle';

function Aboutme() { 
  return (
    <>
      <div className="aboutme-container">
        <Particle/>
        <div className="text-container">
          <div className="header">
              <h1>Meet <span className='highlight'>Markiece Givens</span></h1>
          </div>
          <div>
            <p3>
              I am a dedicated <span className='highlight'>Physicist</span> , <span className='highlight'> Researcher</span> , 
              <span className='highlight'> AI/ML Engineer</span> , <span className='highlight'> Autonomous Vehicle Tester</span> , and
              father. I gained my experience as a <span className='highlight'>researcher</span> from
              the University of Nevada, Las Vegas where I researched <span className='highlight'>astrophysical outflows</span> as 
              well as <span className='highlight'>3D materials</span> in low dimensional devices. After gaining 3 years of experience as a
              researcher, I moved on to <span className='highlight'>autonomous vehicle testing</span>. Since starting AV testing
              in 2022, I was introduced to an encapsulating industry where I gained hands-on
              experience in <span className='highlight'>JIRA</span>, <span className='highlight'>deploying software branches</span>, working 1 on 1 with engineers to solve ongoing software issues
              and <span className='highlight'> troubleshooting</span> AV software in <span className='highlight'>Linux </span>. My experience as
              an <span className='highlight'>AI/ML engineer</span> comes from my graduate studies where I learned about
              heuristic searches, automating tasks and training ML models using python and MATLab.
            </p3>
          </div>
          <div className="header3">
            <h2>Education Background</h2>
          </div>
          <div>
            <p3>
              I currently attend the University of Nevada, Las Vegas where I am a <span className='highlight'>Masters of Science </span> 
               computer science student. The area of focus for my studies is <span className='highlight'>AI/Machine Learning</span>.
               I am building on a dual-degree in Physics and Computer Science where I completed 159 undergraduate credits.
            </p3>
          </div>
          <div className='header2'>
            <h2 className= 'headers2'>Work Values</h2>
          </div>
          <div>
            <p3 className='firstContainerEnd'>
              I believe that <span className='highlight'>hard-work </span>, dedication and <span className='highlight'>discipline </span> are the stepping stones to success.
              I apply these stepping stones to any work I set my mind to in order to be successful in all
              endeavors. My dedication, hard-work and discipline are demonstrated by my ability to juggle 
              full-time work, school, and a family while maintaining above a 3.0 GPA. 
            </p3>
          </div>
        </div>
        <div className="about-photo">
          <img src={aboutMarkiece} alt="visual of me" />
        </div>
      </div>
      <div className='aboutme-container2'>
        <Particle/>
        {/* <div className='coding-language-container'>
          <h3 className='coding-languages-header' style={{fontSize: '3.5em'}}>
            Skills and Applications
          </h3>
          <p>Python:
            
          </p>
        </div>  */}
      </div>
    </>
  );
}

export default Aboutme;
