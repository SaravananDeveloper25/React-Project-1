import React from 'react'
import './common.css'
import { Container, Row,Col} from 'react-bootstrap'
import java from '../../images/java-logo.png'

function AllCoursesPage() {
    return (
        <div>
          
            <div className='Ac-banner'></div>
            <section></section>
            <Container>
                <Row>
                    <Col>
                        <div className='back'>
                            <img src={java} alt="" />
                            <div className='front'>
                                <h4>Lorem ipsum dolor sit.</h4>
                            </div>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <div>
                            <h5>Course name</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, iure blanditiis maiores sunt quidem quam, doloribus quia, aspernatur id neque nemo eius! Deleniti dolor qui neque dolorum incidunt veritatis maiores?</p>
                            <span>5/5 <span>⭐️⭐️⭐️⭐️⭐️(1,753)</span></span> <span></span>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <span style={{padding:'10px',backgroundColor:'red',margin:'10px 0 ',color:'#fff',borderRadius:'10px'}}>Know More</span>
                                <span style={{padding:'10px',border:'2px solid red',margin:'10px 0',color:'red',borderRadius:'10px'}}>Course Syllabus</span>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default AllCoursesPage