import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
  return (
 
    <div style={{textAlign:'left'}}>

        <section></section>

        <div className='footer-box'>
            <Container>
                <Row >
                  <Col className='footer-col'>
                    <h4>company</h4>
                    <ul>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                    </ul>
                  </Col>
                  <Col className='footer-col'>
                    <h4>company</h4>
                    <ul>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                    </ul>
                  </Col>
                  <Col className='footer-col'> 
                    <h4>company</h4>
                    <ul>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                      <li>list</li>
                    </ul>
                  </Col>
                  <Col className='footer-col'>
                    <h4>Follow Us</h4>
                    <div>
                      
                    </div>
                  </Col>
                </Row>
            </Container>

        </div>
    </div>
  )
}

export default Footer