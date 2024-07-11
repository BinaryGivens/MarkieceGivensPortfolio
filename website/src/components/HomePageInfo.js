import React from 'react';
import './HomePageInfo.css';
import TypingHeader from './TypingHeader';
import './TypingHeader.css';

function HomePageInfo() {
    return (
        <div className='HomePageContainer'>
            <div className='home-page-header'>
                <TypingHeader text="Greetings, <br/> My name is Markiece Givens " />
            </div>
            <p className='home-page-body'>
                I am a Scientific Researcher with skills in many popular coding
                languages such as: Python, C, C++, C#, HTML and CSS. With a dual-degree in 
                Computer Science and Physics, I am ready to tackle a wide variety of problems
                across multiple professions.
            </p>
            <div className='home-page-header2'>
                <h1 class="header">More About Me</h1>
            </div>
            <p className='home-page-body'>
                I started college as a physics major and 
                during my junior year I began coding in my free time. I slowly became more and more
                fascinated with developing software and using code to automate certain tasks in my 
                research. This was when I decided to pursue a dual-degree in Computer Science and Physics.
                There is still so much to learn in both fields and I am excited to further my knowledge as
                a graduate student at the University of Nevada, Las Vegas.
            </p>
        </div>
    );
};


export default HomePageInfo;