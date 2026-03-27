import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import Myself from './utils/myself.png'


export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
 
  };
   const openResume = () => {
  window.open("/GauriKharone.pdf", "_blank");
    };
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="hero-text">
              <div className="greeting-text">Hello, I'm</div>
              <h1 className="hero-title">
                <span className="gradient-text">Gauri Kharone</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                I’m a Full Stack Developer skilled in Java (Spring Boot) and the MERN stack, creating high-performance web applications with clean architecture. I also bring DevOps knowledge to streamline development, deployment, and scalability.
              </p>
              <div className="hero-buttons">
                <Button
                  variant="primary"
                  size="lg"
                  className="btn-gradient me-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
                <button onClick={openResume} variant="outline-light" size="lg" className="btn-outline">
                  <Download size={18} className="me-2" />
                  View My CV
                </button>
              </div>
              <div className="social-links">
                <a href="https://github.com/gaurikharone" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/gaurikharone" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={24} />
                </a>
                <a href="mailto: gaurikharone5@gmail.com" className="social-icon">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-wrapper">
              <div className="floating-card">
                <img
                  src = {Myself}
                  alt="Developer workspace"
                  className="hero-image"
                  height="50px"

                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ArrowDown size={24} className="scroll-arrow" />
        </div>
      </Container>
    </section>
  );
}
