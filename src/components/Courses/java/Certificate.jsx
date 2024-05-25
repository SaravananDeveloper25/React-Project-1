import React, { useState } from 'react';
import './courses.css';
import certificate from '../../../images/Mockup Test.png';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const Certificate = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='training-certificate_banner'>
            <Container>
                <Row>
                    <Col style={{ marginTop: '5em' }} xl={5}>
                        <h3>CERTIFICATION</h3>
                        <div>
                            <h5>Heading</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis dicta tempore maxime! Maxime quam, sint molestiae repudiandae, in nihil iste cum, eos inventore odio delectus et non necessitatibus tenetur?</p>
                        </div>
                        <div>
                            <h5>Heading</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perferendis dicta tempore maxime! Maxime quam, sint molestiae repudiandae, in nihil iste cum, eos inventore odio delectus et non necessitatibus tenetur?</p>
                        </div>
                    </Col>
                    <Col style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img 
                            src={certificate} 
                            alt="Certificate" 
                            height='300px' 
                            width='400px' 
                            onClick={handleShow} 
                            style={{ cursor: 'pointer',margin:'50px' }} 
                        />
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <img src={certificate} alt="Certificate" className="modal-image" style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Certificate;
