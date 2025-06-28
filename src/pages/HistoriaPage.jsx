// src/pages/HistoriaPage.jsx (VERSIÓN CORREGIDA)
import React from 'react';
import { Container, Card } from 'react-bootstrap';


const timelineData = [
  {
    year: "1987",
    title: "Nacimiento del Club Polideportivo",
    description: "CD TEAR nació bajo el amparo del CES Ramón y Cajal, como un club polideportivo con fútbol sala, tenis de mesa, escalada y otros deportes.",
  },
  {
    year: "2004/05",
    title: "El Baloncesto Femenino Arranca",
    description: "Antonio García, padre e hijo, pusieron en marcha la sección de baloncesto creando un equipo femenino, el Limpiezas Celeste, que comenzó a competir en la Primera División Nacional.",
  },
  {
    year: "2005/06",
    title: "Crecimiento de la Cantera",
    description: "Tras el éxito inicial, el Club amplió su estructura incorporando tres equipos de cantera en categorías infantil, cadete y júnior.",
  },
  {
    year: "2015/16",
    title: "Ascenso a Liga Femenina 2",
    description: "Después de doce temporadas en Primera Nacional, el club logró el ascenso a LF2, aunque la falta de apoyos económicos impidió materializarlo en ese momento.",
  },
  {
    year: "2017",
    title: "Consolidación en la Élite",
    description: "El 19 de julio se confirmó la participación del conjunto en la categoría de plata del baloncesto nacional, 17 años después de la última vez para un equipo granadino.",
  },
  {
    year: "2020/21",
    title: "Nace la LF Challenge",
    description: "El equipo accede a la nueva Liga Femenina Challenge, una competición intermedia de la FEB, siendo el único equipo andaluz en conseguirlo por méritos deportivos.",
  },
  {
    year: "2021/22",
    title: "Hito Histórico: Fase de Ascenso",
    description: "Con Manuela Fundación como nuevo patrocinador, RACA finaliza la liga en cuarta posición y disputa por primera vez en su historia la Fase de Ascenso a la máxima categoría, la Liga Femenina Endesa.",
  }
];

function HistoriaPage() {
  return (
    <>
      <div className="page-hero-section" style={{ backgroundImage: `url('/img/BANNER_WEB/equipocompleto.png')` }}>
        <div className="page-hero-overlay"></div>
        <Container>
          <h1 className="page-hero-title">Nuestra Historia</h1>
          <p className="page-hero-subtitle">18 años apostando por las mujeres en el baloncesto.</p>
        </Container>
      </div>

      <Container className="content-section">
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.year}</div>
              <Card className="timeline-content">
                <Card.Body>
                  <Card.Title as="h4" className="timeline-title">{item.title}</Card.Title>
                  {/* Aquí también cambiamos item.text por item.description */}
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
export default HistoriaPage;