// src/pages/EquiposCanteraPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { equiposData } from '../data/equiposCanteraData.js';

function EquiposCanteraPage() {
  return (
    <>
      <div className="page-hero-section">
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Equipos de Cantera</h1>
          <p className="page-hero-subtitle">El futuro del club, compitiendo con nuestros valores.</p>
        </Container>
      </div>

      <Container className="content-section">
        <Row className="g-4">
          {equiposData.map((equipo, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12}>
              <Card className="team-card">
                <Card.Img variant="top" src={equipo.img} className="team-card-img" />
                <div className="team-card-overlay">
                  <Card.Title className="team-card-title">{equipo.name}</Card.Title>
                  <p className="team-card-category">{equipo.category}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default EquiposCanteraPage;