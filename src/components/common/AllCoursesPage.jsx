import React from 'react';
import './common.css';
import { Container, Row, Col } from 'react-bootstrap';
import allcourses from '../../data/allcourses';

function AllCoursesPage() {
    return (
        <div>
            <div className='Ac-banner'></div>
            <section>
            <Container >
                {allcourses.map((Course, index) => (
                   
                        <Row key={index} style={{ margin: '20px 0',background:'#fff',padding:'10px',borderRadius:'20px' }}>
                            <Col xl={4} md={6}>
                                <div className='back'>
                                    <img src={Course.img} alt={Course.coursename} />
                                    <div className='front'>
                                        <h4>{Course.coursename}</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={8} md={6}>
                                <div >
                                    <h5>{Course.headname}</h5>
                                    <p className='course-paragraph'>{Course.para}</p>
                                    <span>
                                        5/5 <span>⭐️⭐️⭐️⭐️⭐️({Course.reviews})</span>
                                    </span>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span className='know-more-button'>Know More</span>
                                        <span className='syllabus-button'>Course Syllabus</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                   
                ))}
             </Container>
            </section>
        </div>
    );
}

export default AllCoursesPage;
