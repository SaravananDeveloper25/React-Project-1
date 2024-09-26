import React,{useEffect} from 'react'
import './studentzone.css'
import { Container,Row,Col } from 'react-bootstrap';
import img from '../../images/studentbannerimg.png'
import petimg from '../../images/petimg.png'
import resume1 from '../../images/resume 1.png'
import resume2 from '../../images/resume 2.png'
import resume3 from '../../images/resume 3.png'
import resume4  from '../../images/resume 4.png'
import PlacedStudent from './PlacedStudent';
function StudentZone() {
  const placement=[
    {
      pcount:'1000+',
      pcore:'Non-IT'
    },
    {
      pcount:'1000+',
      pcore:'Non-IT'
    },
    {
      pcount:'1000+',
      pcore:'Non-IT'
    },
    {
      pcount:'1000+',
      pcore:'Non-IT'
    },
    {
      pcount:'1000+',
      pcore:'Non-IT'
    },
    {
      pcount:'1000+',
      pcore:'Non-IT'
    }

  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const resume_img = [resume1,resume2,resume3,resume4]
  return (
    <>
      <div className='stubanner'>
        <Container>
        <div className='stubanner-box'>
        <div className="stubanner-content">
          <h3 style={{fontSize:'48px'}}>student zone</h3>
          <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi recusandae possimus illo sunt dolore non, eum explicabo architecto sed ad ex repudiandae sit voluptatibus inventore velit eos dignissimos provident.</p>
          <button className='red-btn'>button</button>
        </div>
        <div className="stubanner-img">
          <img src={img} alt="" />
        </div>
        </div>

        </Container>

      </div>
      <div className='pet'>
        <Container>
          <div className='petbox'>
          <div className='petimg'>
            <img src={petimg} alt="" />
          </div>
          <div className='petcontent'>
            <div></div>
            <div>
            <h3 style={{fontSize:'24px',fontWeight:700}}>Placement Eligibility Test</h3>
            <p style={{fontSize:'20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aperiam tempore minus iure fugiat alias perspiciatis praesentium eum sunt voluptates veniam repudiandae accusantium nam excepturi provident quas vitae cupiditate dicta beatae, eveniet sequi labore numquam. Sequi ad aut, eveniet ipsam ducimus ex quos voluptatibus iusto vel debitis voluptate ut atque!</p>
            <button className='red-btn'>Button</button>
            </div>

          </div>
          </div>
        </Container>
      </div>    
      <div className="resume">
        <div className="resumehead">
        <h4>Resume</h4>
        <div></div>
        </div>
        <section></section>
        <Container>
        <Row>
          {resume_img.map((val,index)=>{
            return(
              <Col key={index} className='text-center mb-4'>
                <img src={val} alt="" />
                <div style={{marginTop:'1rem'}}>
                <button className='red-btn'>view</button>
                </div>
              </Col>
            )
          })}
        </Row>
        <section></section>
        <Row className='row-hide'>
          {resume_img.map((val,index)=>{
            return(
              <Col key={index} className='text-center'>
                <img src={val} alt="" />
                <div style={{marginTop:'1rem'}}>
                <button className='red-btn'>view</button>
                </div>
              </Col>
            )
          })}
        </Row>
        </Container>
        
      </div>
      <section></section>
      <div className='placement-list'>
          <Container>
           
            <div className="placement-box">
            <div className="placehead">
            <h5>Placemet List</h5>
            <div></div>
            </div>
      
            <p style={{padding:'50px 200px',color:'white',fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga placeat deserunt cum aliquam earum cupiditate facilis, excepturi veniam dolor pariatur quo delectus nemo, nostrum maiores quis voluptatibus. Minus, sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis explicabo quaerat quibusdam asperiores distinctio, sit facere delectus ullam impedit dolore, pariatur suscipit fuga obcaecati, ipsam incidunt velit. Odio, fugit eius.</p>
            <section></section>
            <div className='placed-count'>
              {
                placement.map((place,index)=>{
                  return <div className='placed-count-box'>
                    <h3><strong>{place.pcount}</strong></h3>
                    <p>{place.pcore}</p>
                  </div>
                })
              }
            </div>
            </div>
          </Container>
      </div>
      <section></section>
      <div className='row-hide'>
      <PlacedStudent/>
      </div>
     
    </>
  )
}

export default StudentZone