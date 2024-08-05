import React from 'react';
import { Container, Row, Col,Card} from 'react-bootstrap';
import traingcourse from '../../data/traingcourse';
import './home.css'


const MyCard = () => {
  return (
    <>
        <section></section>
    <Container>
    <Row xs={1} md={2} xl={4} className='g-4 cardrow'>
    {traingcourse.map((course, index) => (
  <Col key={index} xs={12} md={6} className={[4, 5, 6, 7].includes(index) ?"hidden-col":"c"}>
<Card className={[4, 5, 6, 7].includes(index) ? 'hidden-card' : 'Coursecard'}>
      <Card.Img variant="top" src={course.img} className='card_img'/>
      <Card.Body>
        <p style={{marginBottom:'10px',fontWeight:700}}>{course.title}</p>
        <Card.Text style={{display:'flex',justifyContent:'space-between'}}>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p >{course.review}</p>
        </Card.Text>
      </Card.Body>
      <div className="content">
        <div className='content-details'>
        <div>
        <h6>{course.title}</h6>
        <div style={{background:'red',height:'5px',width:'50px',borderRadius:'10px'}}></div>
        </div>
        
        <ul>
          <li>{course.description.l1}</li>
          <li>{course.description.l2}</li>
          <li>{course.description.l3}</li>
        </ul>
        <p className='contentB'>View More</p>
        </div>

      </div>
    </Card>
  </Col>
))}


    </Row>
    <div ><button className='Tbtn' >View All Courses</button></div>
  </Container>
    </>
    
  );
}

export default MyCard;