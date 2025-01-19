import React from 'react';
import './ProjectText.css';

function ProjectText() {
    return(
      <>
      <div className='project'>
        <h1 className='project-summary-header'> My Project Summary </h1>
        <p className='project-summary-text'> My projects are listed on my github, but before you journey there I wanted to give a 
          brief overview of what I have worked on and what I am currently working on. This will give you some foundational information
          on my current focus of projects to help you maneuver through my Github more easily
        </p>
      </div>
      <div className='project-list'>
        <ol type='I'>
          <li className='project-heading'> Autonomous Drone Simulation </li>
            <ul>
              <li className = 'project-body'>  <span className='highlight'> Summary: </span> Drone flight simulation created in ROS2 with C++. </li>
              <li className = 'project-body'> <span className='highlight'> Technologies: </span> Utilizes ROS2, Python, C++ and Gazebo to control and plan flights of a drone
                  in a Gazebo Simulated world.
              </li>
              <li className = 'project-body'> <span className='highlight'> Status: </span> In progress </li>
            </ul>
            <li className='project-heading'> Ai Terminal Chess Game </li>
            <ul>
              <li className = 'project-body'> <span className='highlight'> Summary: </span> Terminal chess game where a player can play chess against Ai in a terminal.
              </li>
              <li className = 'project-body'> <span className='highlight'> Technologies: </span> This project is created in C++ and utilizes Heuristic to generate the best move possible. 
              </li>
              <li className = 'project-body'> <span className='highlight'> Status: </span> Basic chess rules are implemented but the Ai decision making is in progress </li>
            </ul>

          <li className='project-heading'> Portfolio Website </li>
            <ul>
              <li className = 'project-body'> <span className='highlight'> Summary: </span> This is the portfolio website for which you are currently looking at. It is
                your one stop shop to gettng an idea of who I am and what I have accomplished.
              </li>
              <li className = 'project-body'> <span className='highlight'> Technologies: </span> This website utilzies react and AWS (route53, Cloudfront, S3 and ACM) to
                safely deploy and efficiently deliver content to end users. More information about this is on my
                Github where you can take a look at the architecture diagram to further understand how this website is deployed.
              </li>
              <li className = 'project-body'> <span className='highlight'> Status: </span> Complete but updates regularly </li>
            </ul>
          </ol>
      </div>
      </>




  );
}









export default ProjectText;
