// src/pages/CuerpoTecnicoPage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { tecnicoData } from '../data/cuerpoTecnicoData.js';

function CuerpoTecnicoPage() {
  return (
    <>
      <div className="page-hero-section">
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Cuerpo Técnico</h1>
          <p className="page-hero-subtitle">Los profesionales que guían a nuestros deportistas.</p>
        </Container>
      </div>

      <Container className="content-section">
        <Row className="justify-content-center g-4">
          {tecnicoData.map((persona, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12}>
              <div className="profile-card">
                <img src={persona.img} alt={persona.name} className="profile-img" />
                <div className="profile-info">
                  <h5 className="profile-name">{persona.name}</h5>
                  <p className="profile-title">{persona.role}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default CuerpoTecnicoPage;