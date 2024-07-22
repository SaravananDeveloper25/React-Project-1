import React from 'react'
import {  Row, Col,Card} from 'react-bootstrap';

const ServiceCard = () => {
    const ar=[{
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Personalized Learning Path.jpg',
        title:'Personalized Learning Paths',
        des:`Getin Technologies offers personalized learning paths tailored to each student's background, learning pace, and career goals, ensuring maximum effectiveness and efficiency in skill development.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Flexible Learning Option.jpg',
        title:'Flexible Learning Option',
        des:` The institute provides flexible learning options such as online courses, self-paced modules, and classroom-based training, accommodating diverse learning preferences and schedules.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Project-Based Learning.jpg',
        title:'Project-Based Learning',
        des:` Getin Technologies emphasizes project-based learning, allowing students to apply their knowledge and skills to real-world projects, thereby enhancing their practical experience and portfolio.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Continuous Assessment.jpg',
        title:'Continuous Assessment and Feedback',
        des:` Students receive continuous assessment and feedback throughout their training journey, enabling them to track their progress and address areas for improvement effectively.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Skill Enhancement Workshops.jpg',
        title:'Skill Enhancement Workshops',
        des:` In addition to core training programs, Getin Technologies conducts skill enhancement workshops on topics such as communication skills, teamwork, and leadership, preparing students for success in professional environments.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Alumni Network.jpg',
        title:'Alumni Network',
        des:` Getin Technologies fosters a strong alumni network, allowing current students to connect with and learn from successful graduates who have established themselves in the industry.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Career Counseling.jpg',
        title:'Communication Skill',
        des:` The institute offers personalized career counseling services to help students identify their strengths, explore career paths, and make informed decisions about their professional future.`
    },
    {
        img:'https://saravanandeveloper25.github.io/React-Project-1/images/Industry Partnerships.jpg',
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
                    <div style={{position:'relative'}}>
                    <Card className='service-card'>
                        <Card.Body>
                            <div style={{fontSize:'12px'}}>
                                <img src={val.img} alt="" height={100} width={100}/>
                                <section></section>
                                <h6>{val.title}</h6>
                                <p>{val.des}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
                )
            })
        }
        </Row>
    </div>
  )
}

export default ServiceCard