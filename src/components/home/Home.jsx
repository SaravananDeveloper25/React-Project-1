import React,{useEffect} from 'react'
// import banner from '../../images/Copy-of-Offer.webp'
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
import hi from '../../images/home-image.png'
import el1 from '../../images/Ellipse 1.png'
import el2 from '../../images/Ellipse 2.png'
import el3 from '../../images/Ellipse 3.png'
import el4 from '../../images/Ellipse 4.png'
import el5 from '../../images/Frame 6.png'
import bbanner from '../../images/Bbanner.png'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import instructorimage from '../../images/instructor-image.png'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div className='home'>
      <div className='home-banner'>
        <div style={{paddingTop:'2rem',paddingLeft:'4rem'}} className='m-home'>
        <Container>
        <Row id='banner-row'>
          <Col xl={6} sm={12} md={6}>
          <div className='home-content'>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis voluptate sapiente repudiandae beatae et, eveniet nostrum quae! Placeat blanditiis numquam repellat magni quos veritatis non soluta eius ad consequatur.</p>
          <div style={{display:'flex'}}>
          <button id='i'>Button</button>
          <div className='playbtn'><PlayArrowOutlinedIcon className='bf-btn'></PlayArrowOutlinedIcon><PlayArrowIcon className='af-btn' style={{display:'none'}}></PlayArrowIcon></div>
          </div>
        
         </div>
          </Col>
          <Col xl={6} sm={12} md={6}>
          <div className='home-image'>
          <img src={hi} alt=""  />
          <div className='stdcount'>
            <p>10k+ Students</p>
            <div className='stdimg'>
              <div className='img1'><img src={el1} alt="" /></div>
              <div className='img2'><img src={el2} alt="" /></div>
              <div className='img3'><img src={el3} alt="" /></div>
              <div className='img4'><img src={el4} alt="" /></div>
              <div className='img5'><img src={el5} alt="" /></div>
            </div>
          </div>
          </div>
          </Col>
        </Row>
        </Container>
        </div>
        


      </div>
       <Container >
       <section className='trending_courses'>
            <h5>TRAINING COURSE</h5>
             <MyCard />    
       </section>
       
       </Container>
       <section className='Bbanner'>

              <img src={bbanner} alt="" />
              <div className='B-Content'>
                  <h2>Find the right learning path for you</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium eum dolores nostrum voluptas tempore. Dolorum ut suscipit possimus recusandae ipsam praesentium debitis tempore neque perferendis! Deleniti possimus quidem quisquam?</p>
                  <button>Lorem.us</button>
              </div>
       </section>
       <Container>
       <section className='our_services'>
           <span>OUR SERVICES</span>
           <ServiceCard />
       </section>
       <section className='placent_process'>
        <span>PLACEMENT PROCESS</span>
            <Placement />
       </section>


       </Container>
       <section className='placement_partners'>
          <span>OUR PLACEMENT PARTNERS</span>
          <PartnersSlide />
       </section>
       <section className='cbanner'></section>
        <ContactBanner />
        <section className='instructor'>

          <div className='instructor-container'>
            <div className='instructor-content'>
            <h3>Become a Instructor</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore velit nam totam mollitia iusto quisquam quos ut quo consectetur pariatur, tempore, repellat officia sint, minus nisi quasi. Provident, omnis laboriosam.</p>
            </div>
            <div>
              <h3>Enjoy Many Perks</h3>
              <ul>
                <li>lorem1</li>
                <li>lorem1</li>
                <li>lorem1</li>
              </ul>
            </div>
            <div className='instructor-img'>
              <img src={instructorimage} alt="" />
          </div>
          </div>
 


        </section>
        <section className='Review'>
          <h3><span>Getin Technologies Students Reviews</span></h3>
          <Container>
           <section></section>

            <div style={{marginTop:'180px',marginBottom:'180px'}}>
              <Review />
            </div>
            <button style={{width:'200px',padding:'10px',backgroundColor:'red',border:'none',borderRadius:'10px'}}>More Reviews</button>

          </Container>
        </section>
    </div>
  )
}

export default Home