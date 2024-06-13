import React,{useEffect} from 'react'
import './contact.css'
import img1 from '../../images/11668340_20945203.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const handleOnChange = (value) => {
        console.log(value);
    };
    return (
        <div style={{ marginTop: '5rem' }}>
            <section className='contact-banner'>
                <div className='banner-content'>
                    <h1>Heading wit Heading</h1>
                    <span></span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, itaque tenetur harum possimus quod expedita sapiente, nemo cum quasi similique mollitia ad hic autem, vero reprehenderit illo nihil quis error!</p>
                </div>
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
            <div className='contactbox2'>
                <Container>
                    <Row id='ro'>
                        <Col className='boxx' xl={2} xs={12} md={6}>
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
            <Container>
                <Row>
                    <Col xs={12} xl={6} md={6}>
                        <Row>
                            <div className="boxy">
                                <img src="" alt="" />
                                <div>
                                    <p>NEED A CORPORATE LEARNING SOLUTION?</p>
                                    <p>Get in Touch.</p>

                                    <p>email</p>
                                    <p>phone</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="boxy">
                                <img src="" alt="" />
                                <div>
                                    <p>NEED A CORPORATE LEARNING SOLUTION?</p>
                                    <p>Get in Touch.</p>

                                    <p>email</p>
                                    <p>phone</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="boxy">
                                <img src="" alt="" />
                                <div>
                                    <p>NEED A CORPORATE LEARNING SOLUTION?</p>
                                    <p>Get in Touch.</p>

                                    <p>email</p>
                                    <p>phone</p>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} xl={6} md={6}> 
                        <Row>
                            <form action="" className='form'>
                                <div className='form-head'>
                                <img src="" alt="Form Image" />
                                <h5>Let's Resolve Your Query</h5>
                                </div>
                                <hr />
                                <div className='inp'>
                                
                                    <input type="text" placeholder="" id='name' />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className='inp'>

                                <input type="email" placeholder="" id='mail'/>  
                                <label htmlFor="mail">Your Email</label>                                  
                                </div>
                                <PhoneInput
                                   style={{margin:'10px',paddingRight:'13px'}}
                                    country={'in'}
                                    value={''}
                                    onChange={handleOnChange}
                                    inputProps={{
                                        id:'input',
                                        style:{width:'100%'},
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true,
                                        placeholder: 'Your Phone Number'
                                    }}
                                />
                                <div className="inp">
                                <textarea name="message" id="message" ></textarea>
                                <label htmlFor="message" id='la'>Your Message</label>
                                </div>

                                <input type="submit" value="Submit" />
                            </form>
                        </Row>
                        <Row>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.4565313437843!2d77.94630977315106!3d9.555855880523383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012d42f70581bf%3A0x7d3a3a27b3e10ce8!2sGetin%20Technologies%20Virudhunagar!5e0!3m2!1sen!2sin!4v1718189901019!5m2!1sen!2sin"  height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Contact