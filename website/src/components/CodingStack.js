import React from 'react';
import { Col, Row } from 'react-bootstrap';

function CodingStack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '25px' }}>
      <Col xs={4} md={2} className="tech-icons">
        C++
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Python
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        C
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Javascript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        HTML
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Java
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SQL
      </Col>
    </Row>
  );
}

export default CodingStack;
