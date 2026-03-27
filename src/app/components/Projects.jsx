import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ExternalLink, Github } from 'lucide-react';
import wanderHomeImg from './utils/wanderhome.png';
import PortFolio from './utils/portfolio.png';


export function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'WanderHome',
      category: 'Full Stack Website',
      description: 'Wander Home is a responsive web app inspired by Airbnb that lets users search and explore vacation villas by location. Users can view villa details, images, pricing, and amenities, providing an intuitive and seamless browsing experience. Built with React and modern web technologies, this project showcases dynamic content handling, search functionality, and responsive UI design.',
      image: wanderHomeImg ,
      tags: ['HTML', 'CSS', 'Javascript', 'Node.js'  , 'Express.js', 'MongoDb' , 'Ejs Template'],
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Portfolio with Dynamic UI',
      category: 'Frontend Web ',
      description: 'React Frontend Showcase is a modern, interactive web application built entirely with React. It demonstrates multiple frontend functionalities including dynamic routing, responsive design, interactive components, form handling, and API integrations. The project highlights my ability to create clean, intuitive, and fully functional user interfaces with solid UX principles and polished UI design.',
      image: PortFolio,
      tags: ['ReactJs', 'EmailJs', 'CSS', 'Bootstrap', 'Tailwind', 'Material UI'],
      demoLink: 'https://demo.com',
      githubLink: 'https://github.com',
    },
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Some of my recent work that I'm proud of
          </p>
        </div>

       

        <Row className="g-4">
          {filteredProjects.map((project) => (
            <Col key={project.id} md={6} lg={6}>
              <Card className="project-card h-100">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} bg="secondary" className="project-tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
