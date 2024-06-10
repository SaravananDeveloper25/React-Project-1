import React from 'react'
import './contact.css'
import img1 from '../../images/11668340_20945203.jpg';
import { Row,Col,Container } from 'react-bootstrap';
function Contact() {
  return (
    <div style={{marginTop:'5rem'}}>
        <section className='contact-banner'>
            <h1>contact</h1>
            <div className="contactbox1">
                <img src={img1} alt="" />
                <div>
                    <h3>Contact</h3>
                    <p>phone</p>
                    <p>Whatsapp</p>
                </div>
            </div>
        </section>
        <section></section>
        <div className='getin-touch'>
            <h1>Getin with You</h1>
            <p>And you will Witness our Extraordinary Dedication to Digital Learning.</p>
            <div></div>
        </div>
        <section></section>
        <div className='contactbox2'>
            <Container>
            <Row>
            <Col className='boxx' xl={2}  xs={12} md={6}>
                <img src={img1} alt="" />
                <div>
                <h5>ADMISSION</h5>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <p>Phone</p>
                <p>Whatsapp</p>
                </div>
            </Col>
            <Col className='boxx' xl={2} xs={12} md={3}>
                <img src={img1} alt="" />
                <div>
                <h5>ADMISSION</h5>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <p>Phone</p>
                <p>Whatsapp</p>
                </div>
            </Col>
            <Col className='boxx' xl={2} md={6} xs={12}>
                <img src={img1} alt="" />
                <div>
                <h5>ADMISSION</h5>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <p>Phone</p>
                <p>Whatsapp</p>
                </div>
            </Col>
            <Col className='boxx' xl={2} md={6} xs={12}>
                <img src={img1} alt="" />
                <div>
                <h5>ADMISSION</h5>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <p>Phone</p>
                <p>Whatsapp</p>
                </div>
            </Col>
            <Col className='boxx' xl={2} md={2} xs={12}>
                <img src={img1} alt="" />
                <div>
                <h5>ADMISSION</h5>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <p>Phone</p>
                <p>Whatsapp</p>
                </div>
            </Col>
            </Row>
            </Container>
          

           
        </div>
    </div>

  )
}

export default Contact