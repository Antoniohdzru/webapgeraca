// src/pages/GaleriaPage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Añade aquí las rutas a tus fotos. Con el tiempo, podrás añadir más.
const galleryImages = [
  { src: '/dossier/page2-team.jpg', alt: 'Foto de todo el club' },
  { src: '/dossier/page4-valores.jpg', alt: 'Celebración del equipo' },
  { src: '/dossier/page5-trofeo.jpg', alt: 'Equipo levantando un trofeo' },
  { src: '/dossier/page9-team.jpg', alt: 'Equipo en la cancha' },
  { src: '/dossier/page11-team.jpg', alt: 'Foto oficial de la plantilla' },
  { src: '/dossier/page13-cantera.jpg', alt: 'Jóvenes de la cantera' },
  { src: '/dossier/page16-academia.jpg', alt: 'Collage de la Academia Mini' },
  { src: '/dossier/page17-escuelas.jpg', alt: 'Entrenadora en un colegio' },
];

function GaleriaPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url('/img/BANNER_WEB/equipocompleto.png')` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Galería</h1>
          <p className="page-hero-subtitle">Los mejores momentos de nuestra historia y nuestra gente.</p>
        </Container>
      </div>

      <Container className="content-section">
        <Row className="g-4">
          {galleryImages.map((image, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12}>
              <div className="gallery-item">
                <img src={image.src} alt={image.alt} className="img-fluid" />
                <div className="gallery-item-overlay">
                  <span>{image.alt}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default GaleriaPage;