import React,{useEffect} from 'react';
import './common.css';
import { Container, Row, Col } from 'react-bootstrap';
import allcourses from '../../data/allcourses';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ja from '../../images/java-icon.png'

function AllCoursesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div style={{marginTop:'7rem'}}>
          
          <Container>
          <div style={{margin:'auto 10%'}}>
          <Row>
                <Col xl={4}>
                    <div className='all-course-box1'>
                      <div className='course-box1-links'>
                        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                        <h3>Categories</h3>
                        <div style={{background:'red',height:'5px',width:'50px'}}></div>
                        </div> 
                        <div className='course-box1-link'>
                        <p className="box-link"><ArrowForwardIcon className="link-icon" />Programming</p>
                        <p className="box-link"><ArrowForwardIcon className="link-icon" />Programming</p>
                        <p className="box-link"><ArrowForwardIcon className="link-icon" />Programming</p>
                        <p className="box-link"><ArrowForwardIcon className="link-icon" />Programming</p>
                        </div> 
                      </div>
                    </div>
                </Col>
                <Col xl={8}>
                <div className='all-course-box2'>
                  <div className='course-box2-img'>
                    <img src={ja} alt="" />
                  </div>
                  <div className='course-box2-content'>
                    <div className='box2-content-de'>
                      <h3>Course Name</h3>
                      <div style={{background:'#121481',width:'45px',height:'25px',fontSize:'12px',padding:'2px 4px',color:'#fff',fontWeight:600,borderRadius:'5px'}}>
                      <p>⭐️ 4.5</p>
                      </div>
                      <p style={{fontSize:'14px',margin:'10px 0 0 0'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse distinctio, praesentium deleniti reiciendis quos libero asperiores quasi? Neque expedita cupiditate laborum quasi, optio dignissimos dolore id, placeat, repellendus necessitatibus officiis?</p>
                    </div>
                    <div className='box2-content-price'>
                      <h3 style={{color:'#121481'}}>₹xx,xxx</h3>
                      <h6 style={{textDecorationLine:'line-through',color:'#121481',opacity:.5}}>₹xx,xxx</h6>
                      <div className='content-price-btn'>
                      <button className='buttn1'>Book Now</button>
                      <button className='buttn2'>View More</button>
                      </div>
                    </div>
                  </div>
                </div>
                </Col>
            </Row>
          </div>
           
          </Container>
        </div>
    );
}

export default AllCoursesPage;
