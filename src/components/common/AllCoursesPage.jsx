import React,{useEffect} from 'react';
import './common.css';
import { Container, Row, Col } from 'react-bootstrap';
import allcourses from '../../data/allcourses';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Head from './header/Head'
import { Link } from 'react-router-dom';


function AllCoursesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <>
        <Head/>
        <div style={{marginTop:'7rem'}}>
          
          <Container >
          <Row>
                <Col xl={4} className='hide'>
                    <div className='all-course-box1'>
                      <div className='course-box1-links'>
                        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                        <h3>Categories</h3>
                        <div style={{background:'red',height:'5px',width:'50px',borderRadius:'10px'}}></div>
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
                <Col xl={8} >
                {allcourses.map((course)=>{
                   return <div className='all-course-box2' key={course.coursename}>
                   <div className='course-box2-img'>
                     <img src={course.img} alt="" />
                   </div>
                   <div className='course-box2-content'>
                     <div className='box2-content-de'>
                       <h3>{course.coursename}</h3>
                       <div style={{background:'#121481',width:'45px',height:'25px',fontSize:'12px',padding:'2px 4px',color:'#fff',fontWeight:600,borderRadius:'5px'}}>
                       <p>⭐️ {course.reviews}</p>
                       </div>
                       <p style={{fontSize:'14px',margin:'10px 0 0 0'}}  className='hide'>{course.para}</p>
                     </div>
                     <div className='box2-content-price'>
                      <div>
                      <h3 style={{color:'#121481'}}>₹ {course.New_price}</h3>
                      <h6 style={{textDecorationLine:'line-through',color:'#121481',opacity:.5}}>₹ {course.old_price}</h6>
                      </div>
                       <div className='content-price-btn'>
                       <button className='buttn1'>Book Now</button>
                       <Link to='/courses/java'><button className='buttn2'>view more</button></Link>
                       </div>
                     </div>
                   </div>
                 </div>
                })}
                </Col>
            </Row>
           
          </Container>
        </div>
      </>
      
    );
}

export default AllCoursesPage;
