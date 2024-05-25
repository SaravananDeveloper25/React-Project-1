import React, { useState,useEffect } from 'react';
import banner from '../../images/Review-page-banner.png';
import { Container, Row, Form, Button,Col } from 'react-bootstrap';
import ml from '../../images/man logo.png';
import wl from '../../images/women logo.png';
import './review.css'
import stdreviews from '../../data/stdreviews';
const StudentReview = () => {
  const [reviews, setReviews] = useState(stdreviews,() => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    course: '',
    review: '',
    rating: '', // default rating
    gender: 'male', // default gender
    img:null
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'img') {
      // Handle file input separately
      const file = e.target.files[0]; // Get the first file from the array
      const reader = new FileReader(); // Create a file reader
      reader.onloadend = () => {
        // Set the image data as base64 string to the formData state
        setFormData({ ...formData, img: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file); // Read the file as Data URL
      }
    } else {
      // Handle other inputs normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      img:formData.img || (formData.gender === 'male' ? ml : wl),
      name: formData.name,
      course: formData.course,
      review: formData.review,
      rating: formData.rating
    };
   
    setReviews([...reviews, newReview]);
    // Reset form data after submission
    setFormData({
      name: '',
      course: '',
      review: '',
      rating: '',
      gender: 'male'
    });
  };

  const handleDelete = (index) => {
    // Check if the user has permissions to delete (e.g., developer)
    // In this example, we assume only the first user in the list (index 0) has delete permissions
    if (index === 0) {
      const updatedReviews = [...reviews];
      updatedReviews.splice(index, 1);
      setReviews(updatedReviews);
    } else {
      alert('You do not have permission to delete reviews.');
    }
  };

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <div style={{ marginTop: '4.7rem' }}>
      <img src={banner} alt="" style={{ width: '100%' }} />
      <Container>
        <section style={{ textAlign: 'center'}}>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            atque non officiis. Quia, facilis. Fugiat similique, a inventore
            ullam error veniam qui iusto nihil recusandae velit? At facere autem
            rerum?
          </p>
        </section>
        <Row>
          <Col xs={12} md={12} xl={8}>
          {reviews.map((review, index) => (
          <div key={index} className="review_card">
            <Row>
              <div className="review_card_top">
                <div style={{ display: 'flex' }}>
                  <img src={review.img} alt="" className="img" />
                  <div>
                    <h4 style={{margin:0}}>{review.name}</h4>
                    <span>{review.course}</span>
                    <p>{review.rating}</p>
                  </div>
                </div>
                
              </div>
            </Row>
            <Row>
              <p>{review.review}<p style={{color:'black',cursor:'pointer',display:'inline'}} onClick={() => handleDelete(index)}>.</p></p>
            </Row>
          </div>
        ))}
          </Col>
          <Col>
          <Form onSubmit={handleSubmit} className='form'>
            <h3>Post Your Reviews</h3>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="course">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="img">
              <Form.Label>Upload image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter your course"
                name="img"
                onChange={handleInputChange}

                
              />
            </Form.Group>
            <Form.Group controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your review"
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
               as="select"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
               
              >
              <option value="⭐️">⭐️</option>
              <option value="⭐️⭐️">⭐️⭐️</option>
              <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
              <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
              <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
              </Form.Control>

            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Button variant="danger" type="post" className='mt-3'>
              Submit
            </Button>
          </Form>
          </Col>
          
        </Row>
      

      </Container>
    </div>
  );
};

export default StudentReview;
