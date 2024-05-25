import React from 'react'
import {  Row, Col,Card} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const ServiceCard = () => {
    const ar=[{
        img:'http://localhost:3000/images/Personalized Learning Path.jpg',
        title:'Personalized Learning Paths',
        des:`Getin Technologies offers personalized learning paths tailored to each student's background, learning pace, and career goals, ensuring maximum effectiveness and efficiency in skill development.`
    },
    {
        img:'http://localhost:3000/images/Flexible Learning Option.jpg',
        title:'Flexible Learning Option',
        des:` The institute provides flexible learning options such as online courses, self-paced modules, and classroom-based training, accommodating diverse learning preferences and schedules.`
    },
    {
        img:'http://localhost:3000/images/Project-Based Learning.jpg',
        title:'Project-Based Learning',
        des:` Getin Technologies emphasizes project-based learning, allowing students to apply their knowledge and skills to real-world projects, thereby enhancing their practical experience and portfolio.`
    },
    {
        img:'http://localhost:3000/images/Continuous Assessment.jpg',
        title:'Continuous Assessment and Feedback',
        des:` Students receive continuous assessment and feedback throughout their training journey, enabling them to track their progress and address areas for improvement effectively.`
    },
    {
        img:'http://localhost:3000/images/Skill Enhancement Workshops.jpg',
        title:'Skill Enhancement Workshops',
        des:` In addition to core training programs, Getin Technologies conducts skill enhancement workshops on topics such as communication skills, teamwork, and leadership, preparing students for success in professional environments.`
    },
    {
        img:'http://localhost:3000/images/Alumni Network.jpg',
        title:'Alumni Network',
        des:` Getin Technologies fosters a strong alumni network, allowing current students to connect with and learn from successful graduates who have established themselves in the industry.`
    },
    {
        img:'http://localhost:3000/images/Career Counseling.jpg',
        title:'Career Counseling',
        des:` The institute offers personalized career counseling services to help students identify their strengths, explore career paths, and make informed decisions about their professional future.`
    },
    {
        img:'http://localhost:3000/images/Industry Partnerships.jpg',
        title:'Industry Partnerships',
        des:`The institute has strategic partnerships with leading companies in the software industry, providing students with access to internship opportunities, guest lectures, and networking events.`
    },
]
  return (
    <div>
        <section></section>
         <Row xs={1} md={2} xl={4} className='g-4'>
        {
            ar.map((val)=>{
                return(
                <Col xs={12} md={6}>
                    <Card style={{border:'none',boxShadow:'1px 1px 8px 1px rgba(208, 208, 208, 0.614)',height:'300px',background:'#fff',textAlign:'center'}}>
                        <Card.Body>
                            <div style={{fontSize:'12px'}}>
                                <img src={val.img} alt="" height={100} width={100}/>
                                <section></section>
                                <h6>{val.title}</h6>
                                <p>{val.des}</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                )
            })
        }
        </Row>
    </div>
  )
}

export default ServiceCard