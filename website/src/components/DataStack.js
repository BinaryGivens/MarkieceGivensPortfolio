import React from 'react';
import { Col, Row } from 'react-bootstrap';

function DataStack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons2">
        Linear Regression
      </Col>
      <Col xs={3} md={2} className="tech-icons2">
        Chi-Squared 
      </Col>
      <Col xs={3} md={2} className="tech-icons2">
        Confidence Intervals
      </Col>
      <Col xs={3} md={2} className="tech-icons2">
        Non-Linear regression
      </Col>
      <Col xs={3} md={2} className="tech-icons2">
        Data Visualizing
      </Col>
      <Col xs={3} md={2} className="tech-icons2">
        Java
      </Col>
      <Col xs={3} md={2} className="tech-icons2">
        SQL
      </Col>
    </Row>
  );
}

export default DataStack;