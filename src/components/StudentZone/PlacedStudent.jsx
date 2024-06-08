import React,{useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/11668340_20945203.jpg';
import img2 from '../../images/12291062_Wavy_Tech-20_Single-08.jpg';
import img3 from '../../images/144645513_10165951.jpg';
import img4 from '../../images/16717151_2002.i039.010_chatbot_messenger_ai_isometric_set-09.jpg';
import studentsData from '../../data/placedlist'

const images = [img1, img2, img3, img4];

const settings = {
  customPaging: function (i) {
    return (
      <a href="#!">
        <img src={images[i]} alt={`Slide ${i + 1}`} height={200} width={200} />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

function PlacedStudent() {
const [showall,setShowall] = useState(false)
const [display,setDisplay] = useState(30)
const handleShowAll = (num) => {
    setDisplay(num);
    setShowall(true);
  };
  
  return (
    <div className='placed-students'>
      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, unde sed dolore tenetur aut molestias provident earum doloremque. Porro voluptates optio possimus nulla vitae beatae ullam ipsum, corrupti harum officiis.</p>
        <Row>
          <Col xl={6} style={{margin:'0 0 100px 0'}}>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </Col>
        
          <Col>
            <div className='pcontainer'>
              <div className="headbox">Placement Categories</div>
              <div className="databox">
                <span>Non-IT</span>
                <span className='count'>2000+</span>
              </div>
              <div className="databox">
                <span>Non-IT</span>
                <span className='count'>2000+</span>
              </div>
              <div className="databox">
                <span>Non-IT</span>
                <span className='count'>2000+</span>
              </div>
              <div className="databox">
                <span>Non-IT</span>
                <span className='count'>2000+</span>
              </div>
              <div className="databox">
                <span>Non-IT</span>
                <span className='count'>2000+</span>
              </div>
              <div className="databox">
                <span>Non-IT</span>
                <span className='count'>2000+</span>
              </div>
            </div>
          </Col>
        </Row>
        <section>
          <Container style={{ background: '#fff', padding: '20px', boxShadow: '0px 0px 2px 2px rgb(0,0,100,.7)' }}>
            <section></section>
            <h3 style={{ width: '200px', borderBottom: '4px solid', color: 'blue', padding: '5px' }}>Placed Student</h3>

            <section></section>
            <table>

              <thead>
                <tr>
                  <th>No</th>
                  <th>Student</th>
                  <th>Company</th>
                  <th className='hidetable1'>Designation</th>
                  <th className='hidetable'>Course Done</th>
                </tr>
              </thead>
              <tbody>
                {studentsData.slice(0,display).map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td style={{display:'flex',justifyContent:'center'}}>
                        <div style={{display:'flex',width:'100px',justifyContent:'center',alignItems:'center'}}>
                        <img src={student.image} alt={student.name} style={{height:'50px',width:'50px',borderRadius:'50%'}} />
                        <p>{student.name}</p>
                        </div>
     
                    </td>
                    <td>{student.company}</td>
                    <td className='hidetable1'>{student.designation}</td>
                    <td className='hidetable'>{student.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{display:'flex',justifyContent:'center'}}>
            <p className='table-data-count' onClick={()=>{handleShowAll(30)}}>30</p>
            <p className='table-data-count' onClick={()=>{handleShowAll(70)}}>70</p>
            <p className='table-data-count' onClick={()=>{handleShowAll(100)}}>100</p>
            </div>
          </Container>
        </section>
      </Container>
    </div>
  );
}

export default PlacedStudent;
