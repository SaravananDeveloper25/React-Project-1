import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './courses.css';

function RequestForm() {
  const [formData, setFormData] = useState({
    from_name: '',
    to_email: '',
    Phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_k0d218l',   // Replace with your EmailJS service ID
      'template_b8h4lzh',  // Replace with your EmailJS template ID
      formData,
      'hZAs-kAsbaiyp10Zf'  // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Request sent successfully');

      setFormData({
        from_name: '',
        to_email: '',
        phone: ''
      });
    }, (error) => {
      alert('Error sending request');
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4} xl={3}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <div className="input-wrapper">
                <Form.Control 
                  type="text" 
                  name="from_name"
                  placeholder="Enter your name" 
                  value={formData.from_name} 
                  onChange={handleChange} 
                />
                <span className="form-icon">
                  <i className="fa-solid fa-user"></i>
                </span>
              </div>
            </Form.Group>
          </Col>
          <Col md={4} xl={3}>
            <Form.Group controlId="formEmail">
              <Form.Label>E-Mail</Form.Label>
              <div className="input-wrapper">
                <Form.Control 
                  type="email" 
                  name="to_email"
                  placeholder="Enter your email" 
                  value={formData.to_email} 
                  onChange={handleChange} 
                />
                <span className="form-icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
              </div>
            </Form.Group>
          </Col>
          <Col md={4} xl={3}>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <div className="input-wrapper">
                <Form.Control 
                  type="text" 
                  name="Phone"
                  placeholder="Enter your phone number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
                <span className="form-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
              </div>
            </Form.Group>
          </Col>
          <Col md={12} xl={3} style={{marginTop:'2rem'}}>
            <Button type="submit" variant="primary">Request</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default RequestForm;
