import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Code, Home, User, Briefcase, FolderGit2, Mail } from 'lucide-react';
import Logo from "./utils/logo.png"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <Code className="me-2" size={28} />
          <div><img
          className="brand-text"
                            src = {Logo}
                            alt="Developer workspace"
                            cla ssName="hero-image"
          
                          /></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('home')}>
              <Home size={18} className="me-1" />
              Home
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>
              <User size={18} className="me-1" />
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')}>
              <Briefcase size={18} className="me-1" />
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>
              <FolderGit2 size={18} className="me-1" />
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>
              <Mail size={18} className="me-1" />
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
