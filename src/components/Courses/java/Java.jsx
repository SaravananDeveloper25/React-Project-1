import React, { useState,useEffect } from 'react';
import RequestForm from './RequestForm';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './courses.css';
import javaS from '../../../data/syllabus/java';
import ContactBanner from '../../common/ContactBanner';
import CurriculumForm from './CurriculumForm';
import Faq from './Faq';
import Certificate from './Certificate';
import JavaReview from './JavaReview';
import { motion } from 'framer-motion';

const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5,
        },
    },
};

const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};


const Java = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [toggle, setToggle] = useState(null); // Initialize toggle state to null

    function handleClick(index) {
        setToggle(toggle === index ? null : index); // Toggle the value of 'toggle' state based on the index
    }

    return (
        <div style={{ marginTop: '4.7rem' }}>
            <div className='intro_banner' style={{ height: '80vh' }}>
                <Container >
                    <Row className='banner_row'>
                        <Col xs={12} md={12} xl={8} className='banner_col mt-4'>
                            <motion.div
                                initial="initial"
                                animate="animate"
                                variants={containerVariants}
                            >
                                <motion.h1 variants={childVariants}>Java Training Course</motion.h1>
                                <motion.p variants={childVariants}>
                                    Join the program and get the opportunity to learn under the guidance of a Java specialist.
                                </motion.p>
                                <motion.div variants={childVariants}>
                                    <span>⭐️⭐️⭐️⭐️</span>
                                </motion.div>
                                <motion.hr variants={childVariants} />
                                <motion.div style={{ display: 'flex' }} id='banner_p' variants={childVariants}>
                                    <p className='banner_p'>Course Duration <br /> 30 Hrs.</p>
                                    <p className='banner_p'>Live Project <br /> 3 Projects</p>
                                    <p className='banner_p'>Certification<br /> Pass Guaranteed</p>
                                    <p className='banner_p'>Training Format<br /> Live Online / Classroom</p>
                                </motion.div>
                                <motion.div className='btns' variants={childVariants}>
                                    <button className='button1'>Placement</button>
                                    <button className='button2'>Syllabus</button>
                                    <button className='button2'>Interview Questions</button>
                                </motion.div>
                            </motion.div>
                        </Col>
                        <Col
                            id='hide'
                            className='mt-4'
                            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <motion.div initial="initial" animate="animate" variants={childVariants}>
                                <img id='hide' src="https://picsum.photos/200/300" alt="" height={200} width={300} />
                                <button
                                    id='hide'
                                    style={{
                                        backgroundColor: 'rgb(189, 28, 28)',
                                        padding: '10px',
                                        width: '200px',
                                        border: 'none',
                                        margin: '10px 10px 0 0',
                                        color: '#fff'
                                    }}
                                >
                                    Guide me
                                </button>
                            </motion.div>
                        </Col>
                    </Row>
                    <div className='Speciality'>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={containerVariants}
                        >
                            <motion.h3 variants={childVariants}>Speciality</motion.h3>
                            <motion.hr variants={childVariants} />
                            <div className='Speciality_box'>
                                <motion.span variants={childVariants}>Lorem, ipsum.ipsumipsum</motion.span>
                                <motion.span variants={childVariants}>Lorem, ipsum.ipsumipsum</motion.span>
                                <motion.span variants={childVariants}>Lorem, ipsum.ipsumipsum</motion.span>
                                <motion.span variants={childVariants}>Lorem, ipsum.ipsumipsum</motion.span>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </div>

            <section></section>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={8} className='box1 '>
                        {
                            javaS.map((syllabus, index) => {
                                return (
                                    <div className='toggle' key={index}>
                                        <div className='toogleH' onClick={() => handleClick(index)}>
                                            <p>{syllabus.sh}</p>
                                            <i className={`fa-solid ${toggle === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        <div style={{ display: toggle === index ? 'block' : 'none' }}>
                                            <p>{syllabus.sd}</p>
                                            <ul>
                                                {syllabus.sl.map((val, i) => {
                                                    return <li key={i}>{val}</li>;
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Col>
                    <Col>
                        <div style={{ position: 'sticky', top: '6rem' }}>
                            <h3>Java Training in Bengaluru</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore cum in doloremque fugiat facere hic earum vero similique dolorem, porro possimus beatae ratione odit magnam ullam, rerum quam tempore! Iure.</p>
                        </div>

                    </Col>
                </Row>

            </Container>
            <section></section>
            <div className='banner'>
                <Container>
                    <div>
                        <Row id='row'>
                            <Col xs={12} md={6} xl={9} id='table'>
                                <table>
                                    <tr>
                                        <th><span>head</span></th>
                                        <th><span>head</span></th>
                                        <th><span>head</span></th>
                                        <th><span>head</span></th>
                                    </tr>
                                    <tr>
                                        <th><span>head</span></th>
                                        <td><span>data</span></td>
                                        <td><span>data</span></td>
                                        <td><span>data</span></td>
                                    </tr>
                                    <tr>
                                        <th><span>head</span></th>
                                        <td><span>data</span></td>
                                        <td><span>data</span></td>
                                        <td><span>data</span></td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>head</span></th>
                                        <td><span>data</span></td>
                                        <td><span>data</span></td>
                                        <td><span>data</span></td>
                                    </tr>
                                </table>
                            </Col>
                            <Col >
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <h5 style={{ fontSize: '24px' }}>course price</h5>
                                    <span style={{ fontSize: '30px', fontWeight: '600' }}>₹000098 <span style={{ textDecoration: 'line-through', fontSize: '24px', color: 'gray' }}>₹17543</span></span>
                                    <span style={{ color: 'green', fontWeight: '600' }}>10% OFF Expires in EXPIRED</span>
                                    <span style={{ margin: '10px', backgroundColor: 'red', textAlign: 'center', padding: '10px', fontWeight: '600', borderRadius: '5px' }}>Enroll Now</span>
                                </div>

                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
            <section className='Batch_Request'>
                <span className='span'>BATCH REQUEST</span>
                <section></section>
                <Container>
                    <RequestForm />
                </Container>
            </section>
            <section>
                <ContactBanner />
            </section>
            <section className='cp'>
                <span>CURRICULUM & PROJECTS</span>
                <Container>
                    <section></section>
                    <div>
                        <h4>Java Training</h4>
                    </div>
                    <section></section>
                    <Row style={{ textAlign: 'left' }}>
                        <Col xl={8}  >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab facere fuga numquam nemo. Illum neque placeat mollitia exercitationem vitae debitis assumenda blanditiis cum. Officia quia dicta magnam labore non.</p>
                            <Button type="submit" className='mt-3 bg-danger ' style={{ width: '200px' }}>Downdload Syllabus</Button>
                            <h4 style={{ borderBottom: '5px solid red', margin: '16px 73% 0 0' }}>Mock Interviews</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque alias deserunt aut corporis modi commodi provident quisquam facere facilis nam repellendus, ipsum architecto aliquid possimus necessitatibus distinctio libero aspernatur?</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque alias deserunt aut corporis modi commodi provident quisquam facere facilis nam repellendus, ipsum architecto aliquid possimus necessitatibus distinctio libero aspernatur?</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque alias deserunt aut corporis modi commodi provident quisquam facere facilis nam repellendus, ipsum architecto aliquid possimus necessitatibus distinctio libero aspernatur?</li>
                            </ul>
                            <h4 style={{ borderBottom: '5px solid red', margin: '16px 73% 0 0' }}>Projects</h4>
                            <ul>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque alias deserunt aut corporis modi commodi provident quisquam facere facilis nam repellendus, ipsum architecto aliquid possimus necessitatibus distinctio libero aspernatur?</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque alias deserunt aut corporis modi commodi provident quisquam facere facilis nam repellendus, ipsum architecto aliquid possimus necessitatibus distinctio libero aspernatur?</li>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque itaque alias deserunt aut corporis modi commodi provident quisquam facere facilis nam repellendus, ipsum architecto aliquid possimus necessitatibus distinctio libero aspernatur?</li>
                            </ul>
                        </Col>
                        <Col  >
                            <div style={{ position: 'sticky', top: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CurriculumForm />
                            </div>
                        </Col>
                    </Row>
                </Container>


            </section>
            <section className='faq'>
                <h4 className='span'>FAQ'S</h4>
                <section></section>
                <Container>
                    <Row >
                        <Col xl={8}>
                            <Faq />
                        </Col>
                        <Col>
                            <div style={{ backgroundColor: '#fff', margin: '10px', padding: '10px', borderRadius: '10px', boxShadow: '0 0 4px 2px gray' }}>
                                <h3>Career Assistance</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div style={{ display: 'flex' }}>
                                    <a style={{ textAlign: 'center', padding: '10px', margin: 'auto', width: '200px', border: '2px solid red', borderRadius: '5px', color: 'red', fontWeight: 600 }}>Getin Touch</a>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>
            <section className='training-features'>
                <span>TRAINING FEATURES</span>
                <section></section>
                <div>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div style={{ backgroundColor: '#fff', textAlign: 'justify', padding: '10px', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="" alt="" style={{ height: '100px', width: '100px', margin: '10px' }} />
                                        <h5>heading</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi architecto!  facilis!</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div style={{ backgroundColor: '#fff', textAlign: 'justify', padding: '10px', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="" alt="" style={{ height: '100px', width: '100px', margin: '10px' }} />
                                        <h5>heading</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi architecto!  facilis!</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div style={{ backgroundColor: '#fff', textAlign: 'justify', padding: '10px', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="" alt="" style={{ height: '100px', width: '100px', margin: '10px' }} />
                                        <h5>heading</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi architecto!  facilis!</p>
                                </div>
                            </Col>
                        </Row>
                        <section></section>
                        <Row>
                            <Col md={4}>
                                <div style={{ backgroundColor: '#fff', textAlign: 'justify', padding: '10px', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="" alt="" style={{ height: '100px', width: '100px', margin: '10px' }} />
                                        <h5>heading</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi architecto!  facilis!</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div style={{ backgroundColor: '#fff', textAlign: 'justify', padding: '10px', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="" alt="" style={{ height: '100px', width: '100px', margin: '10px' }} />
                                        <h5>heading</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi architecto!  facilis!</p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div style={{ backgroundColor: '#fff', textAlign: 'justify', padding: '10px', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="" alt="" style={{ height: '100px', width: '100px', margin: '10px' }} />
                                        <h5>heading</h5>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi architecto!  facilis!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </section>
            <section className='training-certificate'>
                <Certificate />
            </section>
            <section className='java-reviews'>
                <span>Reviews</span>
                <section></section>
                <div>
                    <JavaReview />
                </div>
            </section>
        </div>
    );
};

export default Java;
