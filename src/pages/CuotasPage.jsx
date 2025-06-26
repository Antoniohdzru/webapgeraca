// src/pages/CuotasPage.jsx (VERSIÓN FINAL)

import React from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
// Ya no necesitamos el botón, y los iconos son solo para el contacto
import { FaPhoneAlt, FaUser } from 'react-icons/fa'; 

const cuotasHeroImg = 'public/BANNER_WEB/2.jpg'; // Imagen de fondo para el encabezado

// Datos con las rutas a TUS imágenes PNG
const cuotasData = [
  {
    title: 'Matrícula Junio',
    price: '100€',
    period: 'Pago Único',
    description: 'Válida para todas las categorías',
    special: true,
    icon: 'img/icons/Icon1.jpeg' 
  },
  {
    title: 'Canasta Grande',
    price: '150€',
    period: 'x3 Cuotas',
    description: 'La categoría de los más experimentados.',
    icon: 'img/icons/Icon2.jpeg'
  },
  {
    title: 'Alevines/as',
    price: '130€',
    period: 'x3 Cuotas',
    description: '#dejandoHUELL',
    icon: 'img/icons/Icon3.jpeg'
  },
  {
    title: 'Benjamín/as',
    price: '120€',
    period: 'x3 Cuotas',
    description: 'Akademia RACA "Space Friends"',
    featured: true,
    icon: 'img/icons/Icon4.jpeg'
  },
  {
    title: 'Babis',
    price: '110€',
    period: 'x3 Cuotas',
    description: 'RACA Granada Superbabys',
    icon: 'img/icons/Icon5.jpeg'
  },
];

const InfoPagos = {
    title: "Tres Cuotas Anuales",
    items: ["Septiembre", "Diciembre", "Marzo"]
}

function CuotasPage() {
  return (
    <>
      {/* Encabezado de la página */}
      <div className="page-hero-section" style={{ backgroundImage: `url(${cuotasHeroImg})` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Cuotas 25/26</h1>
          <p className="page-hero-subtitle">Elige tu categoría y forma parte de la familia RACA.</p>
        </Container>
      </div>

      {/* Sección con las tarjetas de precios */}
      <Container className="content-section">
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {/* Tarjetas de Cuotas con tus iconos */}
          {cuotasData.map((cuota, index) => (
            <Col key={index}>
              <Card className={`h-100 cuota-card ${cuota.featured ? 'pricing-card-featured' : ''}`}>
                <Card.Header className={cuota.special ? 'pricing-card-header-special' : ''}>
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={cuota.icon} alt={`Icono de ${cuota.title}`} className="card-header-icon" />
                    <span className="ms-2">{cuota.title}</span>
                  </div>
                </Card.Header>
                <Card.Body className="d-flex flex-column text-center">
                  <div className="price">{cuota.price}</div>
                  <div className="price-period mb-3">{cuota.period}</div>
                  <p className="text-muted mt-2 flex-grow-1">{cuota.description}</p>
                  {/* --- BOTÓN ELIMINADO --- */}
                </Card.Body>
              </Card>
            </Col>
          ))}
          
           {/* Tarjeta de Información de Pagos (sin icono) */}
           <Col>
            <Card className="h-100 cuota-card info-card">
              <Card.Header>{InfoPagos.title}</Card.Header>
              <Card.Body className="d-flex flex-column justify-content-center text-center">
                <p className="mb-3">Las cuotas se abonarán en los meses de:</p>
                <ListGroup variant="flush">
                    {InfoPagos.items.map((mes, i) => (
                        <ListGroup.Item key={i} className="info-card-item">{mes.toUpperCase()}</ListGroup.Item>
                    ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección de Contacto */}
        <Row className="mt-5 pt-4 justify-content-center text-center contact-section">
            <h3 className="section-title fs-2 mb-4">¿Tienes Dudas? Contacta con Nosotros</h3>
            <Col md={5} lg={4} className="mb-3 mb-md-0">
                <Card className="cuota-card contact-card">
                    <Card.Body>
                        <FaUser size="2em" className="mb-2" />
                        <h5 className="mb-1">Luis (Presidente)</h5>
                        <a href="tel:620900034" className="contact-link"><FaPhoneAlt className="me-2" />620 900 034</a>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={5} lg={4}>
                <Card className="cuota-card contact-card">
                    <Card.Body>
                        <FaUser size="2em" className="mb-2" />
                        <h5 className="mb-1">Joaquín (Tesorero)</h5>
                        <a href="tel:636931820" className="contact-link"><FaPhoneAlt className="me-2" />636 931 820</a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default CuotasPage;