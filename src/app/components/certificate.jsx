import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Code, Database, Layout, Server, Smartphone, GitBranch } from 'lucide-react';

export function Certificate() {

  const skillCategories = [
    {
      title: 'Full Stack Web Development',
      description : "Basically MERN stack , MongoDB, ExspressJs, ReactJs, NodeJs",
      color: '#3b82f6',
      url:"/FullStackWebDevelopment.pdf",
    },
    {
      title: 'Java SpringBoot',
      description : "All about Java and Springbooot framwork with spring MVC architecture",
      color: '#10b981',
      url:"/FullStackJavaDevelopment.pdf",
    },
    {

      title: 'Tableau for Bigenner',
      description : "Data visualization for beginner, with creating dashboard and forecasting with live databases.",
      color: '#f59e0b',
      url:"",
    },
    {
      title: 'Java with DSA',
      description : "Core Java And understanding of data structure with Algorithms",
      color: '#06b6d4',
      url:"",
    },
     {
      title: "National Level Hackathon",
      description : "among top 14th in first round and go for a 24hr National Level Hackathon organized by IMCC,Pune.",
      color: '#06b6d4',
      url:"/Navonmesh2026.pdf",
    }
  ]; 

    const handleOpen = (url) => {
      window.open(url, "_blank");
    };
  
  

  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
          Certifications and achievement done by me........!
          </p>
        </div>

        <Row className="g-4 mb-5">
          {skillCategories.map((category, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="skill-card h-100 text-center ">
                 <div className='d-flex flex-column justify-content-center align-items-center'>x
                <Card.Body>
                  <h4 className="skill-card-title">{category.title}</h4>
                  <div className="skill-tags-c">
                   {category.description}
                  </div>
                  <div className="hero-buttons text-center d-flex justify-content-center">
                  <button onClick={() => handleOpen(category.url)}  variant="primary" size="lg" className="btn-gradient me-3 cls">View Certificate </button>
                  </div>
                </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        
            
        
      </Container>
    </section>
  );
}
