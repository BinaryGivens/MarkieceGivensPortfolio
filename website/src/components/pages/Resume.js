import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle'; // Assuming you have a Particle component
import pdfFile from '../../Assets/../Assets/Markiece_Givens_Resume.pdf'; // Assuming this is the correct path to your PDF file
import { AiOutlineDownload } from 'react-icons/ai';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = ({ pdf = pdfFile }) => {
    const [width, setWidth] = useState(1200);
    useEffect(() => {
        setWidth(window.innerWidth);
      }, []);
    return (
        <>
            <div className="resume-container">
                <Particle/>
                <Button
                    className='res-btn'
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: '250px' }}
                >
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                </Button>
                <Document file={pdf} className="resume-pdf">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
                </Document>
                <Button
                    className='res-btn'
                    variant="primary"
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: '250px' }}
                >
                    <AiOutlineDownload />
                    &nbsp;Download Resume
                </Button>
            </div>
        </>
    );
}

export default Resume;
