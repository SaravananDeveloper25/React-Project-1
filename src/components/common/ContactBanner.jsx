import React from 'react'
import './common.css'
import { Container,Row,Col } from 'react-bootstrap'

function ContactBanner() {
  return (
    <div className='contact_banner'>
    <Container>
    <Row style={{padding:'20px'}} xs={1} xl={2}>
        <Col>
        <div>
        <span>For inquiries, feedback, or assistance,</span>
        <h1>reach out to Getin Technologies Support.</h1>
        <span>Unlock the best support experience with us - drop us a message like this!</span>
        </div>
    
        </Col>
        <Col className='Content_box2' style={{textAlign:'center'}}>
        <div >
        <p>For Voice Call</p>
        <a href="tel:+" ><i class="fa-solid fa-phone"></i> 00000012882</a>
        </div>
        <span className='hide'></span>
        <div >
        <p style={{marginTop:'10px'}}>For Whatsapp Call & Chat</p>
        <a href="" ><i class="fa-brands fa-whatsapp"></i>00928735532</a>
        </div>
        </Col>
         </Row>
        </Container>
    </div>
  )
}

export default ContactBanner