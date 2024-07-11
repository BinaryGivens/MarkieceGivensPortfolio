// src/TypingHeader.js
import React, { useEffect, useState } from 'react';

const TypingHeader = ({ text, speed = 100, delay = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [lines, setLines] = useState(text.split('<br/>'));
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (lineIndex < lines.length) {
            if (index < lines[lineIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev + lines[lineIndex].charAt(index));
                    setIndex(prev => prev + 1);
                }, speed);
            } else {
                timeout = setTimeout(() => {
                    setIndex(0);
                    setDisplayedText(prev => prev + '\n');
                    setLineIndex(prev => prev + 1);
                }, speed);
            }
        } else {
            timeout = setTimeout(() => {
                setIndex(0);
                setDisplayedText('');
                setLineIndex(0);
            }, delay);
        }

        return () => clearTimeout(timeout);
    }, [index, lineIndex, lines, speed, delay]);

    return (
        <h1 className="typed-header">
            {displayedText.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    {index < displayedText.split('\n').length - 1 && <br />}
                </React.Fragment>
            ))}
            <span className="cursor">|</span>
        </h1>
    );
};

export default TypingHeader;
