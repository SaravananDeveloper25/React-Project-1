import React from 'react';
import { Container, Row, Col,Card} from 'react-bootstrap';
import traingcourse from '../../data/traingcourse';
import './home.css'


const MyCard = () => {
  return (
    <>
        <section></section>
    <Container>
    <Row xs={1} md={2} xl={4} className='g-4'>
    {traingcourse.map((course, index) => (
  <Col key={index} xs={12} md={6} >
    <Card className='Coursecard'>
      <Card.Img variant="top" src={course.img} style={{height:"150px"}} className='card_img'/>
      <Card.Body>
        <Card.Title >{course.title}<br></br>Course</Card.Title>
        <Card.Text style={{display:'flex',justifyContent:'space-between'}}>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p >{course.review}</p>
        </Card.Text>
      </Card.Body>
      <div className="content">
        <p>{course.title}</p>
        <hr />
        <ul>
          <li>{course.description.l1}</li>
          <li>{course.description.l2}</li>
          <li>{course.description.l3}</li>
        </ul>
        <p className='contentB'>View More Details</p>
      </div>
    </Card>
  </Col>
))}


    </Row>
  </Container>
    </>
    
  );
}

export default MyCard;