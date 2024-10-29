import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
  return (
 
    <div style={{textAlign:'left'}}>

        <section></section>

        <div className='footer-box'>
            <Container>
                <Row xl={12} >
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
                  
                    <div>
                    <h5>Follow Us</h5>
                      <YouTubeIcon style={{background:'red',borderRadius:'50%',height:'30px',width:'30px',border:'solid white',padding:'5px',margin:'5px'}}></YouTubeIcon>
                      <FacebookIcon style={{background:'blue',borderRadius:'50%',height:'30px',width:'30px',border:'solid white',padding:'5px',margin:'5px'}}></FacebookIcon>
                      <LinkedInIcon style={{background:' rgb(87, 126, 204)',borderRadius:'50%',height:'30px',width:'30px',border:'solid white',padding:'5px',margin:'5px'}}></LinkedInIcon>
                      <InstagramIcon style={{background:'rgb(160, 77, 91)',borderRadius:'50%',height:'30px',width:'30px',border:'solid white',padding:'5px',margin:'5px'}}></InstagramIcon>
                      <XIcon style={{background:'black',borderRadius:'50%',height:'30px',width:'30px',border:'solid white',padding:'5px',margin:'5px'}}></XIcon>
                    </div>
                    <section></section>
                    <div>
                      <h5>Email</h5>
                      <form action="" className='footer-form'>
                        <input type="email" placeholder='Email' />
                        <button className='footer-form-btn'><ArrowCircleRightIcon style={{background:'white',color:'red'}}></ArrowCircleRightIcon></button>
                      </form>
                    </div>
                  </Col>
                </Row>
                <div className='footer-row-2'>
                    <div className='footer-line'></div>
                    <div className="footer-copy">
                      <p>&copy;getin technologies, All rights reserved</p>
                    </div>
                </div>
            </Container>

        </div>
    </div>
  )
}

export default Footer