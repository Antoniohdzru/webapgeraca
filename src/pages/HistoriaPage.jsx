// src/pages/HistoriaPage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const historiaHeroImg = '/img/BANNER_WEB/equipocompleto.png'; // Puedes usar una imagen genérica o una específica

function HistoriaPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url(${historiaHeroImg})` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Nuestra Historia</h1>
          <p className="page-hero-subtitle">18 años apostando por las mujeres en el baloncesto.</p>
        </Container>
      </div>

      <Container className="content-section">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="mb-5">
              <h2 className="section-title text-start border-start border-primary border-4 ps-3">Fundación</h2>
              <p className="text-muted">El CD TEAR nació en 1987 al amparo del CES Ramón y Cajal como un club polideportivo.</p>
            </div>

            <div className="mb-5">
              <h3 className="section-subtitle">2004/05: El Inicio del Baloncesto</h3>
              <p>Antonio García, padre e hijo, pusieron en marcha la sección de baloncesto del club, que había abandonado casi toda su actividad. Crearon un equipo femenino que comenzó a competir en la Primera División Nacional, el Limpiezas Celeste.</p>
            </div>
            
            <div className="mb-5">
              <h3 className="section-subtitle">2005/06: Crecimiento de la Cantera</h3>
              <p>Tras el primer año, el club amplió su estructura incorporando tres equipos de cantera en categorías infantil, cadete y júnior.</p>
            </div>

            <div className="mb-5">
              <h3 className="section-subtitle">2015/16: Ascenso a Liga Femenina 2</h3>
              <p>Después de doce temporadas en Primera Nacional, el club logró el ascenso a Liga Femenina 2. Sin embargo, la falta de apoyos económicos no permitió dar el salto en ese momento.</p>
            </div>

            <div className="mb-5">
              <h3 className="section-subtitle">2017: Consolidación en la Élite</h3>
              <p>El 19 de julio de 2017 se confirmó la participación del conjunto en la categoría de plata, devolviendo el baloncesto granadino a esta categoría 17 años después.</p>
            </div>

            <div className="mb-5">
              <h3 className="section-subtitle">2021/22: Hitos Recientes</h3>
              <p>El equipo participó en la nueva Liga Femenina Challenge, siendo el único equipo andaluz en conseguirlo deportivamente. Con Manuela Fundación como nuevo patrocinador, el equipo acabó la liga regular en cuarta posición y disputó por primera vez en su historia la Fase de Ascenso a Liga Femenina Endesa, la máxima categoría nacional.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HistoriaPage;