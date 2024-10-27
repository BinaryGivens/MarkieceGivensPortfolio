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
                I am a <span className='highlight'>Scientific Researcher</span> and <span className='highlight'> AI/ML Engineer Engineer </span> 
                with experience in many popular coding languages such as: Python, C, C++, C#, Jave, HTML and CSS. 
                I am currently pursuing a <span className='highlight'>M.S</span> in <span className='highlight'>Computer Science</span>  and have already achieced a dual-degree in 
                <span className='highlight'>Computer Science</span> and <span className='highlight'>Physics</span>.
                With my education and work experience, I am ready to tackle a wide variety of problems
                across multiple professions.
            </p>
            <div className='home-page-header2'>
                <h1 class="home-header">More About <span className='highlight'>Me</span></h1>
            </div>
            <p className='home-page-body'>
                I started college as a physics major and 
                during my junior year I began coding in my free time. I slowly became more and more
                fascinated with <span className='highlight'>developing software</span> and using code to 
                automate certain tasks in my <span className='highlight'>research</span>. This was when I decided to 
                pursue a dual-degree in Computer Science and Physics.
                There is still so much to learn in both fields and I am excited to further my knowledge as
                a <span className='highlight'>graduate student</span> at the University of Nevada, Las Vegas.
            </p>
        </div>
    );
};


export default HomePageInfo;
