// src/pages/ActividadesPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const actividadesHeroImg = '/img/BANNER_WEB/equipocompleto.png';

function ActividadesPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url(${actividadesHeroImg})` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Actividades del Club</h1>
          <p className="page-hero-subtitle">Planificamos un calendario anual de eventos para cubrir las necesidades deportivas y de visibilidad del proyecto y sus patrocinadores.</p>
        </Container>
      </div>

      <Container className="content-section">
        <Row className="g-4">
          <Col md={6}>
            <Card className="cuota-card h-100">
              <Card.Body>
                <Card.Title>Torneo Día de Andalucía</Card.Title>
                <Card.Text>
                  Cada 28 de Febrero, RACA se convierte en el epicentro del baloncesto andaluz con un tradicional torneo que fomenta la convivencia y permite testar el nivel deportivo de los equipos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cuota-card h-100">
              <Card.Body>
                <Card.Title>3x3 Nocturno</Card.Title>
                <Card.Text>
                  Como cierre de temporada, organizamos nuestro torneo 3x3 nocturno, una modalidad olímpica en crecimiento. El evento puede alcanzar los 500 participantes y cuenta con un ambiente festivo con DJ, comida y bebida.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cuota-card h-100">
              <Card.Body>
                <Card.Title>Campus (Semana Santa y Vuelta al Cole)</Card.Title>
                <Card.Text>
                  Ofrecemos dos campus al año para facilitar la conciliación familiar y que los jugadores sigan practicando baloncesto en días no lectivos, combinando técnica individual con talleres y juegos divertidos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="cuota-card h-100">
              <Card.Body>
                <Card.Title>Visitas a Colegios y Municipios</Card.Title>
                <Card.Text>
                  Las jugadoras del equipo de Liga Femenina Challenge visitan centros escolares para fomentar hábitos de vida saludables y visibilizar a la mujer en el deporte, sirviendo como referentes para los más jóvenes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default ActividadesPage;