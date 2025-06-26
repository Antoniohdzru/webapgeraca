
import React from 'react';
import { Container, Carousel, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { iconosSecciones } from '../data/navegacionIconos.js';
import { todasLasNoticias } from '../data/noticiasData.js';

// --- DATOS DE LA PÁGINA ---
const carouselData = [
  { img: 'public/img/BANNER_WEB/1.jpg', title: 'Bienvenidos al Universo RACA', link: '/club' },
  { img: 'public/img/BANNER_WEB/2.jpg', title: '¿Quieres formar parte de la familia?', link: '/cuotas' },
  { img: 'public/img/BANNER_WEB/equipo.png', title: 'Galería', link: '/galeria' },
];

const latestNews = todasLasNoticias.slice(0, 3);

const sponsorsData = [
  { src: 'public/img/sponsors/sponsor1.jpg', alt: 'Sponsor 1' }, { src: 'public/img/sponsors/sponsor2.jpg', alt: 'Sponsor 2' },
  { src: '/sponsors/p-3.png', alt: 'Sponsor 3' }, { src: '/sponsors/p-4.png', alt: 'Sponsor 4' },
  { src: '/sponsors/p-5.png', alt: 'Sponsor 5' }, { src: '/sponsors/p-6.png', alt: 'Sponsor 6' },
  { src: '/sponsors/p-7.png', alt: 'Sponsor 7' },
];

// Helper para encontrar el icono por su 'id'
const getIcon = (id) => iconosSecciones.find(i => i.id === id)?.icon || '';

function HomePage() {
  return (
    <>
      {/* --- SECCIÓN HERO CAROUSEL --- */}
      <Carousel fade className="hero-carousel" controls={false} indicators={false} interval={4000}>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.img} alt={item.title} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <Button as={Link} to={item.link} className="btn-hero mt-3">Explorar</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* --- TEASER: NUESTRO CLUB --- */}
      <Container className="content-section">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <h2 className="section-title text-start">Nuestro Club</h2>
            <p className="lead">
              RACA es el club de baloncesto granadino que apuesta firmemente por la mujer como deportista profesional. Un proyecto familiar con más de 18 años de historia. 
            </p>
            <blockquote className="blockquote-custom">
              Creemos en la palabra equipo para construir un proyecto que nos una en el compañerismo, la amistad, el compromiso y el respeto. 
            </blockquote>
            <Link to="/club" className="cta-link">
              <span className="cta-text">Conoce el Club</span>
              <img src={getIcon('club')} alt="Icono Nuestro Club" className="cta-icon" />
            </Link>
          </Col>
          <Col lg={5}>
            <img src="img/BANNER_WEB/LogoRaca.png" alt="Foto de todo el club" className="img-fluid rounded shadow-lg" />
          </Col>
        </Row>
      </Container>

      {/* --- TEASER: CANTERA --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <Row className="align-items-center g-5 info-section-reverse">
            <Col lg={7}>
              <h2 className="section-title text-start">Cantera: El Corazón de RACA</h2>
              <p className="lead">
                Las categorías inferiores integran a más de 200 jugadores divididos por categorías en diecisiete equipos. 
              </p>
              <p>
                El objetivo es aumentar la práctica deportiva desde la base con entrenadores y metodología de calidad, ofreciendo a las jugadoras la posibilidad de crecer hasta el baloncesto nacional. 
              </p>
              <Link to="/cantera" className="cta-link">
                <span className="cta-text">Explora la Cantera</span>
                <img src={getIcon('cantera')} alt="Icono Cantera" className="cta-icon" />
              </Link>
            </Col>
            <Col lg={5}>
              <img src="public/img/BANNER_WEB/cantera.png" alt="Jóvenes de la cantera" className="img-fluid rounded shadow-lg" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- TEASER: LIGA FEMENINA CHALLENGE (NUEVO) --- */}
      <Container className="content-section">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <h2 className="section-title text-start">Competición de Élite</h2>
            <p className="lead">
              Nuestro primer equipo compite en la Liga Femenina Challenge, la segunda división del baloncesto femenino a nivel estatal. 
            </p>
            <p>
              Es una liga muy atractiva y de alto nivel competitivo que fomenta el desarrollo de jóvenes talentos y sirve como puerta al mejor baloncesto europeo. 
            </p>
            <Link to="/liga-challenge" className="cta-link">
              <span className="cta-text">Sobre la Liga</span>
              <img src={getIcon('matricula')} alt="Icono Competición" className="cta-icon" />
            </Link>
          </Col>
          <Col lg={5}>
            <img src="public/img/BANNER_WEB/LF_Challenge.png" alt="Equipo compitiendo" className="img-fluid rounded shadow-lg" />
          </Col>
        </Row>
      </Container>
      
      {/* --- TEASER: ACTIVIDADES (NUEVO) --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <Row className="align-items-center g-5 info-section-reverse">
            <Col lg={7}>
              <h2 className="section-title text-start">Eventos y Actividades</h2>
              <p className="lead">
                El club planifica un calendario anual de actividades para asegurar que se cubren las necesidades deportivas y de visibilidad para el proyecto y sus patrocinadores. 
              </p>
              <p>
                Desde el tradicional Torneo del Día de Andalucía hasta el popular 3x3 nocturno, organizamos eventos que se han convertido en señas de identidad del club. 
              </p>
              <Link to="/actividades" className="cta-link">
                <span className="cta-text">Ver Actividades</span>
                <img src={getIcon('actividades')} alt="Icono Actividades" className="cta-icon" />
              </Link>
            </Col>
            <Col lg={5}>
              <img src="public/img/BANNER_WEB/Untitled.jpg" alt="Torneo 3x3 Nocturno" className="img-fluid rounded shadow-lg" />
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* --- SECCIÓN NOTICIAS DESTACADAS --- */}
      <Container className="content-section">
        <h2 className="section-title">Actualidad del Club</h2>
        <Row className="g-4 justify-content-center">
          {latestNews.map((news) => (
            <Col md={6} lg={4} key={news.id}>
              <Card className="news-card">
                <Card.Img variant="top" src={news.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{news.title}</Card.Title>
                  <Button as={Link} to={`/noticias/${news.id}`} variant="outline-primary" className="card-button-outline mt-auto align-self-start">Leer Más</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Button as={Link} to="/noticias" size="lg" className="btn-hero">Ver Todas las Noticias</Button>
        </div>
      </Container>
      
      {/* --- TEASER: GALERÍA (NUEVO) --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
            <Row className="align-items-center g-5">
                <Col lg={7}>
                    <h2 className="section-title text-start">Nuestros Mejores Momentos</h2>
                    <p className="lead">
                        La historia de nuestro club, la pasión de nuestra afición y la entrega de nuestras jugadoras, todo capturado en imágenes.
                    </p>
                    <Link to="/galeria" className="cta-link">
                        <span className="cta-text">Visita la Galería</span>
                        <img src={getIcon('galeria')} alt="Icono Galería" className="cta-icon" />
                    </Link>
                </Col>
                <Col lg={5}>
                    <img src="public/img/BANNER_WEB/equipo.png" alt="Equipo celebrando con un trofeo" className="img-fluid rounded shadow-lg" />
                </Col>
            </Row>
        </Container>
      </div>

      {/* --- SECCIÓN PATROCINADORES --- */}
      <Container className="content-section">
        <h2 className="section-title">Nuestros Patrocinadores</h2>
        <div className="sponsors-wrapper">
          {sponsorsData.map((sponsor, index) => (
            <img key={index} src={sponsor.src} alt={sponsor.alt} className="sponsor-logo" />
          ))}
        </div>
      </Container>
    </>
  );
}
export default HomePage;