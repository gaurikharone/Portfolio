import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
  import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,    // copy from EmailJS template
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email  // ✅ Add this line
    },
     import.meta.env.VITE_PUBLIC_KEY      // copy from EmailJS dashboard
  )
  .then((response) => {
    alert("Message sent successfully ✅");
    console.log("SUCCESS!", response.status, response.text);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send message ❌");
  });
};

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'gaurikharone5@gmail.com',
      link: '',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '749XXXXXX',
      link: '',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Pune, Maharashtra.',
      link: null,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-header text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-info-card mb-3">
                  <Card.Body>
                    <div className="contact-info-icon">{info.icon}</div>
                    <h5 className="contact-info-title">{info.title}</h5>
                    {info.link ? (
                      <a href={info.link} className="contact-info-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-info-value">{info.value}</p>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>

          <Col lg={8}>
            <Card className="contact-form-card">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="FirstName LastName"
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="header@example.com"
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      required
                      className="custom-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      className="custom-input"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="btn-gradient w-100"
                  >
                    <Send size={18} className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
