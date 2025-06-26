// src/pages/CanteraPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// --- DATOS EXTRAÍDOS DEL DOSSIER ---
const canteraHeroImg = '/dossier/page2-team.jpg'; 
const canteraMainImg = 'public/img/BANNER_WEB/jovenescantera.png'; 
const academiaMiniImg = 'public/img/BANNER_WEB/academiamini.png'; 
const escuelasImg = 'public/img/BANNER_WEB/escuelas.png'; 

function CanteraPage() {
  return (
    <>
      {/* --- HERO DE LA PÁGINA --- */}
      <div className="page-hero-section" style={{ backgroundImage: `url(${canteraHeroImg})` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Nuestra Cantera</h1>
          <p className="page-hero-subtitle">El futuro del baloncesto granadino, donde formamos jugadoras y personas.</p>
        </Container>
      </div>

      {/* --- SECCIÓN INTRODUCCIÓN Y CIFRAS --- */}
      <Container className="content-section text-center">
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="section-title">El Corazón de RACA</h2>
            <p className="lead">
              El club está integrado por más de 250 jóvenes deportistas y sus familias. Contamos con más de 17 equipos, desde la categoría baby (4 años) hasta sénior (mayores de 18 años).
            </p>
          </Col>
        </Row>
      </Container>
      
      {/* --- SECCIÓN PRINCIPAL CANTERA --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img src={canteraMainImg} alt="Jóvenes de la cantera RACA" className="img-fluid rounded shadow-lg" />
            </Col>
            <Col lg={6}>
              <h3 className="objective-subtitle">Formación y Competición</h3>
              <p>
                Los equipos se entrenan durante tres días a la semana y participan en la liga de la Federación Andaluza de Baloncesto y en la competición local del Ayuntamiento de Granada. A esto se suman entrenamientos específicos, amistosos y torneos.
              </p>
              <p>
                Uno de nuestros propósitos es promocionar jugadoras y ofrecerles la posibilidad de seguir creciendo hasta nuestro equipo de Liga Femenina Challenge. De nuestra cantera han sido convocadas una decena de jugadoras por las categorías inferiores de la Selección Española.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SECCIÓN ACADEMIA MINI --- */}
      <Container className="content-section">
        <Row className="align-items-center g-5 info-section-reverse">
          <Col lg={6}>
            <img src={academiaMiniImg} alt="Collage de la Academia Mini" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col lg={6}>
            <h2 className="section-title text-start">Academia MINI</h2>
            <p>
              La Academia MINI nace como la apuesta decidida del Club por impulsar el baloncesto de formación. Está dirigida a niñas y niños que no tienen acceso en sus centros de estudio a actividades deportivas regladas o que demandan mayor calidad en la formación.
            </p>
            <blockquote className="blockquote-custom">
              Tutelados por la dirección deportiva de Ismael Puyana, un grupo de técnicos titulados da coherencia a la filosofía del proyecto: formar, crecer y competir.
            </blockquote>
            <p>
              Los entrenamientos se completan con charlas para familias, talleres específicos y jornadas de convivencia.
            </p>
          </Col>
        </Row>
      </Container>
      
      {/* --- SECCIÓN ESCUELAS --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img src={escuelasImg} alt="Entrenadora de RACA en un colegio" className="img-fluid rounded shadow-lg" />
            </Col>
            <Col lg={6}>
              <h2 className="section-title text-start">Escuelas Deportivas</h2>
              <p>
                Desde 2013, RACA gestiona el baloncesto en el Colegio Virgen de Gracia y más recientemente en el Granada College, con previsión de incorporar el Colegio Virgen de las Nieves.
              </p>
              <p>
                El objetivo es aumentar la práctica deportiva desde la base sin que los niños y niñas tengan que alejarse de su colegio, pero con entrenadores y metodología de calidad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SECCIÓN EQUIPO +35 --- */}
      <Container className="content-section text-center">
        <Row className="justify-content-center">
            <Col lg={8}>
                <h3 className="objective-subtitle">Y para las veteranas... Equipo +35</h3>
                <p>
                  Una de las grandes novedades es la creación del primer equipo +35 de la provincia de Granada. Un conjunto que reunirá a jugadoras de distintas generaciones del baloncesto femenino granadino para seguir haciendo lo que más les gusta un par de veces a la semana.
                </p>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default CanteraPage;