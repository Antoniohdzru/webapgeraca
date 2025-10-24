// src/pages/NoticiasPage.jsx 
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { todasLasNoticias } from '../data/noticiasData.js'; 

// --- LÓGICA MODIFICADA PARA DOS NOTICIAS ---

// 1. Noticia principal 1 (la que tiene featured: true o la primera del array)
const featuredNews1 = todasLasNoticias.find(news => news.featured) || todasLasNoticias[0];

// 2. Noticia principal 2 (la del campus, la buscamos por su ID)
const featuredNews2 = todasLasNoticias.find(news => news.id === 'campus-individual');

// 3. Creamos una lista de los IDs que ya son principales
const featuredIds = [featuredNews1?.id]; // Usamos '?' por si featuredNews1 fuera undefined
if (featuredNews2) {
  featuredIds.push(featuredNews2.id);
}

// 4. El resto de noticias son todas las que NO están en nuestra lista de principales
const otherNews = todasLasNoticias.filter(news => !featuredIds.includes(news.id));
// --- FIN DE LA LÓGICA MODIFICADA ---


function NoticiasPage() {

  // --- COMPROBACIÓN DE SEGURIDAD ---
  // Si no hay ninguna noticia (ni la 1), mostramos un mensaje
  if (!featuredNews1) {
    return (
      <Container className="content-section">
        <h1 className="text-center mt-5">No hay noticias disponibles</h1>
        <p className="text-center">Por favor, vuelve a intentarlo más tarde.</p>
      </Container>
    );
  }
  // --- FIN DE LA COMPROBACIÓN ---

  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url('/img/BANNER_WEB/equipocompleto.png')` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Noticias</h1>
          <p className="page-hero-subtitle">Toda la actualidad del CD Tear Ramón y Cajal.</p>
        </Container>
      </div>

      <Container className="content-section">
        
        {/* --- NOTICIA PRINCIPAL 1 (Torneo) --- */}
        <h2 className="section-title mb-4">Noticias Destacadas</h2>
        <Card className="news-card featured-news-main mb-5">
          <Row className="g-0">
            <Col lg={7}>
              <img src={featuredNews1.img} className="img-fluid featured-news-img" alt={featuredNews1.title} />
            </Col>
            <Col lg={5} className="d-flex flex-column">
              <Card.Body className="p-4 p-lg-5">
                <Card.Title className="featured-news-title">{featuredNews1.title}</Card.Title>
                <Card.Text className="my-3">{featuredNews1.text}</Card.Text>

                {/* --- BOTÓN CORREGIDO --- */}
                <Button 
                  href={featuredNews1.externalLink}  // <-- CORREGIDO
                  target="_blank" 
                  rel="noopener noreferrer"      
                  variant="primary" 
                  className="card-button mt-auto align-self-start"
                >
                  Leer Noticia Completa
                </Button>

              </Card.Body>
            </Col>
          </Row>
        </Card>

        {/* --- NOTICIA PRINCIPAL 2 (Campus) --- */}
        {/* Usamos un renderizado condicional, por si no se encontrara la noticia del campus */}
        {featuredNews2 && (
          <Card className="news-card featured-news-main mb-5">
              <Row className="g-0">
                <Col lg={7}>
                  {/* ¡OJO! Recuerda corregir la ruta de esta imagen en 'noticiasData.js'.
                    Ahora mismo tienes '/img/BANNER_WEB/.jpg', que está rota.
                  */}
                  <img src={featuredNews2.img} className="img-fluid featured-news-img" alt={featuredNews2.title} />
                </Col>
                <Col lg={5} className="d-flex flex-column">
                  <Card.Body className="p-4 p-lg-5">
                    <Card.Title className="featured-news-title">{featuredNews2.title}</Card.Title>
                    <Card.Text className="my-3">{featuredNews2.text}</Card.Text>

                    {/* --- BOTÓN CORREGIDO --- */}
                    <Button 
                      href={featuredNews2.externalLink} // <-- CORREGIDO
                      target="_blank" 
                      rel="noopener noreferrer"      
                      variant="primary" 
                      className="card-button mt-auto align-self-start"
                    >
                      Leer Noticia Completa
                    </Button>

                  </Card.Body>
                </Col>
              </Row>
            </Card>
        )}


        {/* Noticias Secundarias */}
        <h2 className="section-title mt-5">Más Actualidad</h2>
        <Row className="g-4">
          {/* 'otherNews' ahora contiene todas las noticias menos las dos principales */}
          {otherNews.map((news) => (
            <Col key={news.id} lg={4} md={6}>
              <Card className="news-card h-100">
                <Card.Img variant="top" src={news.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>{news.text}</Card.Text>
                  
                  <Button 
                    href={news.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary" 
                    className="card-button-outline mt-auto align-self-start"
                  >
                    Leer Más
                  </Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default NoticiasPage;
