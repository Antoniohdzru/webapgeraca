// src/pages/NoticiasPage.jsx (VERSIÓN ACTUALIZADA)
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { todasLasNoticias } from '../data/noticiasData.js'; // <-- Importamos los datos

// Separamos la noticia destacada del resto
const featuredNews = todasLasNoticias.find(news => news.featured) || todasLasNoticias[0];
const otherNews = todasLasNoticias.filter(news => news.id !== featuredNews.id);

function NoticiasPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url('/dossier/page29-press.jpg')` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Noticias</h1>
          <p className="page-hero-subtitle">Toda la actualidad del CD Tear Ramón y Cajal.</p>
        </Container>
      </div>

      <Container className="content-section">
        {/* Noticia Principal */}
        <Card className="news-card featured-news-main mb-5">
          <Row className="g-0">
            <Col lg={7}>
              <img src={featuredNews.img} className="img-fluid featured-news-img" alt={featuredNews.title} />
            </Col>
            <Col lg={5} className="d-flex flex-column">
              <Card.Body className="p-4 p-lg-5">
                <Card.Title className="featured-news-title">{featuredNews.title}</Card.Title>
                <Card.Text className="my-3">{featuredNews.text}</Card.Text>
                <Button as={Link} to={`/noticias/${featuredNews.id}`} variant="primary" className="card-button mt-auto align-self-start">Leer Noticia Completa</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        {/* Noticias Secundarias */}
        <h2 className="section-title mt-5">Más Actualidad</h2>
        <Row className="g-4">
          {otherNews.map((news) => (
            <Col key={news.id} lg={4} md={6}>
              <Card className="news-card h-100">
                <Card.Img variant="top" src={news.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>{news.text}</Card.Text>
                  <Button as={Link} to={`/noticias/${news.id}`} variant="outline-primary" className="card-button-outline mt-auto align-self-start">Leer Más</Button>
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