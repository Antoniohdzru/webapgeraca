// src/pages/NuestroClubPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Datos para la sección de "Personas"
const personasData = [
  { name: 'Luis Felipe', title: 'Presidente', img: 'img/people/people1.png' },
  { name: 'Mariki Rodríguez', title: 'Directora deportiva', img: 'img/people/people2.png' },
  { name: 'Julio Molina', title: 'Responsable cantera', img: 'img/people/people3.png' },
  { name: 'Ismael Puyana', title: 'Responsable Academia Mini', img: 'img/people/people4.png' },
  { name: 'Eva Castillo', title: 'Marketing y Comunicación', img: 'img/people/people5.png' },
];

// Lista de valores del club
const valoresList = [
  "Compañerismo", "Amistad", "Generosidad", "Trabajo en equipo", "Superación", 
  "Esfuerzo", "Compromiso", "Diversión", "Pasión", "Responsabilidad", "Valentía", "Seguridad", "Respeto"
];

function NuestroClubPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url('img/BANNER_WEB/equipocompleto.png')` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">CD TEAR Ramón y Cajal</h1>
          <p className="page-hero-subtitle">El club de baloncesto granadino que apuesta firmemente por la mujer como deportista profesional.</p>
        </Container>
      </div>

      {/* --- SECCIÓN PRESENTACIÓN --- */}
      <Container className="content-section">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <h2 className="section-title text-start">Presentación</h2>
            <p>El primer equipo compite en Liga Femenina Challenge, la segunda categoría nacional, siendo el equipo andaluz que compite a mayor nivel deportivo. </p>
            <p>El club está integrado por más de 250 jóvenes deportistas y sus familias, con más de 17 equipos desde la categoría baby (4 años) hasta sénior. </p>
            <p>Los objetivos del club son la transmisión de valores a través del deporte, inculcar hábitos de vida saludables y la igualdad de la mujer en todos los ámbitos. </p>
          </Col>
          <Col lg={6}>
            <img src="img/BANNER_WEB/objetivos.png" alt="Foto del equipo completo" className="img-fluid rounded shadow-lg" />
          </Col>
        </Row>
      </Container>
      
      {/* --- SECCIÓN VALORES --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <Row className="align-items-center g-5 info-section-reverse">
            <Col lg={6}>
              <img src="img/BANNER_WEB/valores.png" alt="Jugadoras celebrando" className="img-fluid rounded shadow-lg" />
            </Col>
            <Col lg={6}>
              <h2 className="section-title text-start">Valores</h2>
              <p>El deporte va más allá del ejercicio físico. El club cree en la palabra equipo para construir un proyecto que nos una en el compañerismo, la amistad, el compromiso y el respeto. </p>
              <p>Es importante reconocer a RACA como un club familiar. Un lugar donde las jugadoras se desarrollan bajo hábitos saludables, aprendiendo a relacionarse e incorporando valores que les ayuden a alcanzar sus objetivos. </p>
              <div className="d-flex flex-wrap gap-2 mt-4">
                {valoresList.map(valor => <span key={valor} className="value-tag">{valor}</span>)}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* --- SECCIÓN OBJETIVOS (NUEVO DISEÑO) --- */}
      <Container className="content-section">
        <h2 className="section-title">Nuestros Objetivos</h2>
        <Row className="align-items-center g-5">
          {/* Columna Izquierda para la Imagen */}
          <Col lg={5}>
            <img src="img/BANNER_WEB/imagenequipo1.jpg" alt="Equipo" className="img-fluid rounded shadow-lg" />
          </Col>
          <Col lg={7}>
            <div className="objective-text-block">
              <div className="mb-4">
                <h3 className="objective-subtitle">Crecimiento Social y Empresarial</h3>
                <ul className="objective-list">
                  <li>Ampliar la base de aficionados y consolidar a los abonados. </li>
                  <li>Realizar campañas para acercar el baloncesto femenino al público general. </li>
                  <li>Implicar a más empresarios como patrocinadores del tejido granadino. </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="objective-subtitle">Baloncesto Base</h3>
                <ul className="objective-list">
                  <li>Creación de la Academia Mini y crecimiento en equipos y actividades. </li>
                  <li>Incorporar y gestionar escuelas deportivas en más centros escolares. </li>
                  <li>Formar entrenadores con nuestra metodología, fomentando la presencia de mujeres.</li>
                </ul>
              </div>
              <div>
                <h3 className="objective-subtitle">Visibilidad de la Mujer</h3>
                <ul className="objective-list">
                  <li>Desarrollar actividades y eventos enfocados a la participación de la mujer.</li>
                  <li>Implicación en actividades organizadas por el área de Igualdad del Ayuntamiento y Diputación. </li>
                  <li>Visitas a centros educativos con nuestras jugadoras como referentes. </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* --- SECCIÓN PERSONAS --- */}
      <div className="bg-darker-section">
        <Container className="content-section">
          <h2 className="section-title">Personas</h2>
          <Row className="justify-content-center g-4 mb-5">
            {personasData.map(persona => (
              <Col xs={6} md={4} lg={2} key={persona.name}>
                <div className="profile-card">
                  <img src={persona.img} alt={persona.name} className="profile-img" />
                  <div className="profile-info">
                    <h5 className="profile-name">{persona.name}</h5>
                    <p className="profile-title">{persona.title}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <p>La consolidación del proyecto pasa por un grupo de trabajo fuerte y unido.  La Junta Directiva está constituida por un grupo de madres y padres, gente implicada que resalta el carácter FAMILIAR del club. </p>
              <p>Los entrenadores están compuestos en su mayoría por jugadores y exjugadores que sienten los valores del club y saben transmitirlos. </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default NuestroClubPage;