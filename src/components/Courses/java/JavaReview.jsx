import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './courses.css';
import ml from '../../../images/man logo.png';
import wl from '../../../images/women logo.png';

const ReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      img: ml,
      name: "John Doe",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi expedita sit ipsam praesentium. Magni consectetur minima earum unde quibusdam quas blanditiis dolorum itaque explicabo vero suscipit laboriosam, eligendi aliquam?"
    },
    {
      id: 2,
      img: wl,
      name: "Jane Smith",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi expedita sit ipsam praesentium. Magni consectetur minima earum unde quibusdam quas blanditiis dolorum itaque explicabo vero suscipit laboriosam, eligendi aliquam?"
    },
    {
      id: 3,
      img: ml,
      name: "Michael Brown",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi expedita sit ipsam praesentium. Magni consectetur minima earum unde quibusdam quas blanditiis dolorum itaque explicabo vero suscipit laboriosam, eligendi aliquam?"
    },
    {
      id: 4,
      img: wl,
      name: "Emily White",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae commodi expedita sit ipsam praesentium. Magni consectetur minima earum unde quibusdam quas blanditiis dolorum itaque explicabo vero suscipit laboriosam, eligendi aliquam?"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Container>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <Row className="justify-content-center review_row">
                <Col md={12} className='review_c'>
                  <div style={{ display: 'flex', textAlign: 'left', alignItems: 'center', margin: '10px' }}>
                    <div><img src={review.img} alt={review.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} /></div>
                    <div style={{ marginLeft: '10px' }}>
                      <h5>{review.name}</h5>
                      <p>{review.rating}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'justify', padding: '10px' }}>
                    <p>{review.text}</p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ReviewCarousel;
