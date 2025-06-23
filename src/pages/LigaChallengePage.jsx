// src/pages/LigaChallengePage.jsx (VERSIÓN ACTUALIZADA)
import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

// Imágenes que usaremos en esta página
const ligaHeroImg = 'img/BANNER_WEB/LFChalenngeBanner.jpg'; 
const competicionImg = 'img/BANNER_WEB/competicion.png';
const palacioImg = 'img/BANNER_WEB/palacio.png';
const equipoImg = 'img/BANNER_WEB/equipo.png'; 

// Datos que se mantienen
const jugadorasGranada = [
  "Laura Arrojo", "Marina Gea", "Carmen Mir", "Judith Martín",
  "Carmen García", "Marta Morales", "Alba Vigo", "Alexandra Westerdijk"
];

function LigaChallengePage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url(${ligaHeroImg})` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Liga Femenina Challenge</h1>
          <p className="page-hero-subtitle">La segunda división del baloncesto femenino a nivel estatal, una competición atractiva y con un alto nivel competitivo.</p>
        </Container>
      </div>

      {/* --- SECCIÓN LA COMPETICIÓN (sin cambios) --- */}
      <Container className="content-section">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h2 className="section-title text-start">La Competición</h2>
            <p>La LF Challenge fomenta el desarrollo de jóvenes talentos y, a su vez, se convierte en la primera experiencia de jugadoras extranjeras en España, como puerta al mejor baloncesto europeo.</p>
            <blockquote className="blockquote-custom">
              El formato consiste en una liga regular de 30 jornadas. El campeón consigue el ascenso directo a LF Endesa. Los equipos entre la 2ª y la 9ª posición disputan una eliminatoria, y los cuatro vencedores juegan una final four por la segunda plaza de ascenso.
            </blockquote>
          </Col>
          <Col lg={6}>
            <img src={competicionImg} alt="Partido en el Palacio de los Deportes" className="img-fluid rounded shadow-lg" />
          </Col>
        </Row>
      </Container>
      
      {/* --- NUEVA SECCIÓN: AFICIÓN EN EL PALACIO --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <h2 className="section-title">El Palacio</h2>
          <Row className="align-items-center g-5 info-section-reverse">
            <Col lg={6}>
              <img src={palacioImg} alt="Afición en el Palacio de los Deportes de Granada" className="img-fluid rounded shadow-lg" />
            </Col>
            <Col lg={6}>
              <p className="lead">La llegada de RACA al Palacio Municipal de los Deportes de Granada le ha brindado al club la oportunidad de crecer, no sólo por tener una instalación que se adapta a las exigencias de la competición, sino también para favorecer que más gente se acerque a conocer al equipo.</p>
              <p>El Manuela Fundación RACA ha fijado este año el récord de asistencia a un partido de la competición, con 4.300 espectadores. Además, el club es de los equipos que, con regularidad, reúne a más aficionados en sus gradas  y es de los más seguidos en las emisiones en streaming de los partidos.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SECCIÓN EQUIPO (sin cambios) --- */}
      <Container className="content-section">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <img src={equipoImg} alt="Plantilla del equipo referente" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col lg={6}>
            <h2 className="section-title text-start">Un Equipo con Acento Granadino</h2>
            <p>Pese a haber estado luchando por las dos plazas de ascenso, el proyecto deportivo de la temporada 2022/23 volverá con acento granadino.</p>
            <p>Hasta ocho jugadoras nacidas en Granada han tenido la oportunidad de competir en categoría FEB con RACA en los últimos dos años:</p>
            <div className="d-flex flex-wrap gap-2 mt-3">
              {jugadorasGranada.map(jugadora => <span key={jugadora} className="value-tag">{jugadora}</span>)}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default LigaChallengePage;