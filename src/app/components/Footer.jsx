import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/gaurikharone', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/gaurikharone', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:gaurikharone5@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="footer-title">Portfolio</h4>
            <p className="footer-description">
              Building exceptional digital experiences with passion and precision.
              Let's create something amazing together.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5 className="footer-heading">Get In Touch</h5>
            <div className="footer-contact">
              <p>
                <Mail size={16} className="me-2" />
                gaurikharone5@gmail.com
              </p>
              <p>Pune, Maharashtra.</p>
              <p>Available for freelance work</p>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. Made with{' '}
            <Heart size={14} className="heart-icon" fill="currentColor" /> by Gauri Kharone
          </p>
        </div>
      </Container>
    </footer>
  );
}
