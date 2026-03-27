import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Code, Database, Layout, Server, Smartphone, GitBranch } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      color: '#3b82f6',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      color: '#10b981',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication', 'Java', 'Springboot'],
    },
    {
      icon: <Database size={32} />,
      title: 'Database',
      color: '#f59e0b',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      icon: <GitBranch size={32} />,
      title: 'DevOps',
      color: '#06b6d4',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
    },
     {
      icon: <GitBranch size={32} />,
      title: "IDE's",
      color: '#06b6d4',
      skills: ['VS Code ', 'Ecllipse', 'IntelliJ'],
    },
  ];


  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <Row className="g-4 mb-5">
          {skillCategories.map((category, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="skill-card h-100">
                <Card.Body>
                  <div className="skill-card-icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h4 className="skill-card-title">{category.title}</h4>
                  <div className="skill-tags">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">
                        {skill}
                      </span>
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
