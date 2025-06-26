// src/App.jsx
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap'; 
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import './App.css';

import { iconosSecciones } from './data/navegacionIconos.js';
import HomePage from './pages/HomePage.jsx';
import CuotasPage from './pages/CuotasPage.jsx';
import NuestroClubPage from './pages/NuestroClubPage.jsx';
import HistoriaPage from './pages/HistoriaPage.jsx';
import CanteraPage from './pages/CanteraPage.jsx';
import ActividadesPage from './pages/ActividadesPage.jsx';
import LigaChallengePage from './pages/LigaChallengePage.jsx';
import NoticiasPage from './pages/NoticiasPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import EquiposCanteraPage from './pages/EquiposCanteraPage.jsx';
import CuerpoTecnicoPage from './pages/CuerpoTecnicoPage.jsx';

const logoUrl = '/LogoRaca.png';

function App() {
  return (
    <div className="app-wrapper">
      
      <Navbar className="navbar-custom sticky-top" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={logoUrl} height="40" alt="Logo RACA" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/" className="nav-link-custom">Inicio</Nav.Link>
              <NavDropdown title="Club" id="club-dropdown">
                <NavDropdown.Item as={Link} to="/club">Nuestro Club</NavDropdown.Item> 
                <NavDropdown.Item as={Link} to="/historia">Historia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cantera">Cantera</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/actividades">Actividades</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/cuotas">Cuotas y Abonos</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Estructura" id="estructura-dropdown">
                <NavDropdown.Item as={Link} to="/equipos-cantera">Equipos Cantera</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cuerpo-tecnico">Cuerpo Técnico</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/liga-challenge" className="nav-link-custom">LF Challenge</Nav.Link>
              <Nav.Link as={NavLink} to="/noticias" className="nav-link-custom">Noticias</Nav.Link>
              <Nav.Link as={NavLink} to="/galeria" className="nav-link-custom">Galería</Nav.Link>
              <div className="navbar-divider d-none d-lg-block mx-3"></div>
              <div className="d-flex align-items-center">
                <Nav.Link href="https://www.instagram.com/cdraca/?hl=es" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FaInstagram /></Nav.Link>
                <Nav.Link href="https://www.facebook.com/CDRaca/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FaFacebookF /></Nav.Link>
                <Nav.Link href="https://x.com/cdraca" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FaXTwitter /></Nav.Link>
                <Nav.Link href="#" target="_blank" rel="noopener noreferrer" className="social-icon-link"><FaYoutube /></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cuotas" element={<CuotasPage />} />
          <Route path="/club" element={<NuestroClubPage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/cantera" element={<CanteraPage />} />
          <Route path="/actividades" element={<ActividadesPage />} />
          <Route path="/liga-challenge" element={<LigaChallengePage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/equipos-cantera" element={<EquiposCanteraPage />} />
          <Route path="/cuerpo-tecnico" element={<CuerpoTecnicoPage />} />
        </Routes>
      </main>

      <footer className="footer-custom pt-5 pb-4">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0 text-start"><h5 className="footer-title">CD Tear Ramón y Cajal</h5><p>Pabellón Paquillo Fernández<br />C. de Joaquina Eguaras, 11<br />18013, Granada, España</p><p>Tel: +34 606 63 87 23</p></Col>
            <Col md={2} className="mb-3 mb-md-0 text-start"><h5 className="footer-title">Club</h5><Nav className="flex-column"><Nav.Link as={Link} to="/club" className="footer-link">Nuestro Club</Nav.Link><Nav.Link as={Link} to="/historia" className="footer-link">Historia</Nav.Link><Nav.Link as={Link} to="/cantera" className="footer-link">Cantera</Nav.Link></Nav></Col>
            <Col md={3} className="mb-3 mb-md-0 text-start"><h5 className="footer-title">Legal</h5><Nav className="flex-column"><Nav.Link as={Link} to="/aviso-legal" className="footer-link">Aviso Legal</Nav.Link><Nav.Link as={Link} to="/privacidad" className="footer-link">Política de Privacidad</Nav.Link></Nav></Col>
            <Col md={3} className="text-md-end"><h5 className="footer-title">Síguenos</h5><div className="social-icons-footer"><a href="https://www.facebook.com/CDRaca/?locale=es_ES" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon me-2"><FaFacebookF size="1.5em"/></a><a href="https://x.com/cdraca" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-icon me-2"><FaXTwitter size="1.5em"/></a><a href="https://www.instagram.com/cdraca/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon me-2"><FaInstagram size="1.5em"/></a><a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-icon"><FaYoutube size="1.5em"/></a></div></Col>
          </Row>
          <hr className="mt-4 mb-3 footer-hr" />
          <p className="text-center text-muted-footer mb-0">© {new Date().getFullYear()} CD TEAR RAMÓN Y CAJAL. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}
export default App;