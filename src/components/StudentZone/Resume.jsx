import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './studentzone.css';
import img from '../../images/11668340_20945203.jpg';
import img2 from '../../images/12291062_Wavy_Tech-20_Single-08.jpg';

const images = [
    img,
    img2,
    img,
    img,
    img,
    img,
    img,
    img,
    img,
    img,
    img,
    img,
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

function Resume() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleShow = (img) => {
        setSelectedImage(img);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div>
            <section></section>
            <div className="recard">
                <Container>
                    <Slider {...settings}>
                        {images.map((img, i) => (
                            <div key={i}>
                                <Row>
                                    <Col className='resume-card'>
                                        <img src={img} alt="" height="200px" width="200px" />
                                        <button onClick={() => handleShow(img)}>View Resume</button>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
            <Modal show={showModal} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Resume</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedImage} alt="Selected Resume" style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Resume;
