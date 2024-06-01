import React from 'react'
import './studentzone.css'
import { Container,Row,Col } from 'react-bootstrap'
function StudentZone() {
  return (
    <div style={{marginTop:'5rem'}}>
        <div className='zone-banner'>
            <h3>Student Zone</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, animi consectetur culpa in dolore commodi molestiae. Quod laudantium doloribus sapiente perferendis asperiores, eum molestias soluta quos autem laboriosam consectetur culpa!</p>
        </div>
        <section className='iq' style={{textAlign:"center"}}>
            <span style={{fontWeight:700,fontSize:"1.5rem",borderBottom:"5px solid red"}}>interview questions</span>
            <section></section>
            <Container>
              <Row>
                  <Col>
                    <div className='topic-box'>
                        <h4>Course name</h4>
                        <div style={{display:'flex'}}>
                         <img src="https://picsum.photos/200/300" alt="course-image" width="400px" height={100}/>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quaerat tempore corporis impedit molestiae aliquam praesentium dolor, maxime perspiciatis iusto natus repellendus amet est quidem quisquam, cumque qui nam eaque!</p>
                        </div>
                        <div className='button'>
                          <button>download</button>
                        </div>
                    </div>
                  </Col>
                  <Col>
                    <div className='topic-box'>
                        <h4>Course name</h4>
                        <div style={{display:'flex'}}>
                         <img src="https://picsum.photos/200/300" alt="course-image"  width="400px" height={100}/>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, quaerat tempore corporis impedit molestiae aliquam praesentium dolor, maxime perspiciatis iusto natus repellendus amet est quidem quisquam, cumque qui nam eaque!</p>
                        </div>
                        <div className='button'>
                          <button>download</button>
                        </div>
                        
                    </div>
                  </Col>
              </Row>
            </Container>
        </section>
    </div>
  )
}

export default StudentZone