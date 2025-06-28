// src/pages/ActividadesPage.jsx (VERSIÓN ACTUALIZADA)
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { todasLasActividades } from '../data/actividadesData.js'; 

const actividadesHeroImg = '/img/BANNER_WEB/actividades.png';

function ActividadesPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url(${actividadesHeroImg})` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Actividades del Club</h1>
          <p className="page-hero-subtitle">Planificamos un calendario anual de eventos para cubrir las necesidades deportivas y de visibilidad del proyecto.</p>
        </Container>
      </div>

      <Container className="content-section">
        <Row className="g-4">
          {todasLasActividades.map((actividad) => (
            <Col md={6} key={actividad.id} className="mb-4">
              {/* --- CAMBIO: Usamos la nueva clase 'activity-card' --- */}
              <Card className="activity-card h-100">
                <Card.Img variant="top" src={actividad.img} style={{height: '250px', objectFit: 'cover'}} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="activity-card-title">{actividad.title}</Card.Title>
                  <Card.Text className="activity-card-text mt-2 flex-grow-1">
                    {actividad.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ActividadesPage;