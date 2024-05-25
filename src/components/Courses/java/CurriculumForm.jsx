import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';


function CurriculumForm() {
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
    <Form onSubmit={handleSubmit} >
      <Row id='cForm'>
        <>
          <Form.Group controlId="formName">
            <div className="input-wrapper">
              <input
                type="text" 
                name="from_name"
                placeholder="Enter your name" 
                value={formData.from_name} 
                onChange={handleChange} 
                style={{borderTop:'none',borderRight:'none',borderLeft:'none',margin:'10px'}}
              />
            </div>
          </Form.Group>
        </>
        <>
          <Form.Group controlId="formEmail">
            <div className="input-wrapper">
              <input
                type="email" 
                name="to_email"
                placeholder="Enter your email" 
                value={formData.to_email} 
                onChange={handleChange} 
                style={{borderTop:'none',borderRight:'none',borderLeft:'none',margin:'10px'}}
              />
            </div>
          </Form.Group>
        </>
        <>
          <Form.Group controlId="formPhone">
            <div className="input-wrapper">
              <input 
                type="text" 
                name="Phone"
                placeholder="Enter your phone number" 
                value={formData.phone} 
                onChange={handleChange} 
                style={{borderTop:'none',borderRight:'none',borderLeft:'none',margin:'10px'}}
              />
            </div>
          </Form.Group>
          <Form.Group controlId="message">
            <div className="input-wrapper">
              <Form.Control
                as="textarea"
                name="message"
                onChange={handleChange} 
                style={{borderTop:'none',borderRight:'none',borderLeft:'none'}}
                id='textarea'
                placeholder='Enter your message'
              />
            </div>
          </Form.Group>
        </>
          <Button type="submit" variant="primary" className='mt-3'>Request</Button>
      </Row>
    </Form>
  </div>
  )
}

export default CurriculumForm