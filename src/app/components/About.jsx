import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code2, Rocket, Users, Award } from 'lucide-react';

export function About() {

  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Passionate developer focused on creating innovative solutions
          </p>
        </div>

        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1762242298589-582f5f6c3fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc3NDUyNjk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About me"
                className="about-image"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <h3 className="about-heading">
                Transforming Ideas into <span className="gradient-text">Digital Reality</span>
              </h3>
              <p className="about-text">
                I am a passionate developer with a strong foundation in software development and a keen interest in building efficient and scalable solutions. I enjoy solving problems, learning new technologies, and continuously improving my skills. My approach is focused on writing clean, reliable code while staying adaptable to changing project needs and industry trends.
              </p>
              <p className="about-text">
                Along with development, I have a good understanding of DevOps practices, including CI/CD, version control, and deployment processes. This helps me contribute to faster and more efficient software delivery while maintaining quality. I believe in collaboration, automation, and continuous improvement to build better systems.
              </p>
              <p className="about-text">
               I am also eager to explore emerging fields like Artificial Intelligence and Machine Learning. I’m excited to learn and apply these technologies to real-world problems, combining my development experience with intelligent solutions and growing in future-focused domains.
              </p>
            </div>
          </Col>
        </Row>

        
      </Container>
    </section>
  );
}
