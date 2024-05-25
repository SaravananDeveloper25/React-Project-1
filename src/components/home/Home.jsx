import React from 'react'
import banner from '../../images/Copy-of-Offer.webp'
import MyCard from './TcourseCard';
import { Container } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import Placement from './Placement';
import PartnersSlide from './PartnersSlide';
import Review from './Review'
import './home.css'
import {Row,Col} from 'react-bootstrap';
import aq from "../../images/Assessment Queries.png"
import mt from '../../images/Mockup Test.png'
import ta from '../../images/Time Analysiss.png'
import sa from '../../images/Score Analysis.png'
import qa from '../../images/Query Elaboration.png'
import el from '../../images/Elucidation.png'
import analaysis from '../../images/analysis.png'
import ContactBanner from '../common/ContactBanner';




const Home = () => {
 
  return (
    <div className='home'>
       <img src={banner} alt="banner" style={{width:"100%",marginTop:"4.75rem"}}/>
       <Container >
       <section className='trending_courses'>
            <span>TRENDING COURSE</span>
             <MyCard />    
       </section>
       <section className='our_services'>
           <span>OUR SERVICES</span>
           <ServiceCard />
       </section>
       <section className='placent_process'>
        <span>PLACEMENT PROCESS</span>
            <Placement />
       </section>
       <section className='placement_partners'>
          <span>OUR PLACEMENT PARTNERS</span>
          <PartnersSlide />
       </section>
       </Container>
       <section className='cbanner'></section>
        <ContactBanner />
        <section className='Self-assessment-Evaluation'>
          <span>Self-assessment Evaluation</span>
          <div>
            <section></section>
            <p>Explore your strengths, identify areas for improvement, and chart your path to success with Getin Technologies' Self-assessment Evaluation, an essential tool for shaping your career trajectory in the ever-evolving world of software training and placement.</p>
          </div>
          <Container>
          <Row xs={1} md={2} xl={2} className='g-4'>
            <Col xs={12} md={6}>
                <Row>
                  <Col>
                  <img src={aq} alt="" height={100} width={100} />
                  <p>Assessment Queries</p>
                  </Col>
                  <Col>
                  <img src={mt} alt="" height={100} width={100}/>
                  <p>Mockup Test</p>
                  </Col>
                  <Col>
                  <img src={ta} alt="" height={100} width={100}/>
                  <p>Time Analysiss</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <img src={sa} alt="" height={100} width={100}/>
                  <p>Score Analysis</p>
                  </Col>
                  <Col>
                  <img src={qa} alt="" height={100} width={100}/>
                  <p>Query Elaboration</p>
                  </Col>
                  <Col>
                  <img src={el} alt="" height={100} width={100}/>
                  <p>Elucidation</p>
                  </Col>
                </Row>

            </Col>
            <Col xs={12} md={6}>
              <div>
              <img src={analaysis} alt="" style={{width:'400px'}} id='hide' />
              </div>
            </Col>
          </Row>
          </Container>
         
          
          
        </section>
        <section className='Review'>
          <h3><span>Getin Technologies Students Reviews</span></h3>
          <Container>
           <section></section>

            <div style={{marginTop:'150px',marginBottom:'150px'}}>
              <Review />
            </div>
            <button style={{width:'200px',padding:'10px',backgroundColor:'red',border:'none',borderRadius:'10px'}}>More Reviews</button>

          </Container>
        </section>
    </div>
  )
}

export default Home