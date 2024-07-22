import React, { useState, useEffect } from 'react';
import banner from '../../images/Review-page-banner.png';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';
import ml from '../../images/man logo.png';
import wl from '../../images/women logo.png';
import './review.css'
import stdreviews from '../../data/stdreviews';
const StudentReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [reviews, setReviews] = useState(stdreviews, () => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [];
  });

  const [formData, setFormData] = useState({
    name: '',
    course: '',
    review: '',
    rating: '', // default rating
    gender: 'male', // default gender
    img: null
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
      img: formData.img || (formData.gender === 'male' ? ml : wl),
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
    <div style={{}}>
      <img src={banner} alt="" style={{ width: '100%' }} />
      <Container>
        <section style={{ textAlign: 'center' }}>
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
                        <h4 style={{ margin: 0 }}>{review.name}</h4>
                        <span>{review.course}</span>
                        <p>{review.rating}</p>
                      </div>
                    </div>

                  </div>
                </Row>
                <Row>
                  <p>{review.review}<p style={{ color: 'black', cursor: 'pointer', display: 'inline' }} onClick={() => handleDelete(index)}>.</p></p>
                </Row>
              </div>
            ))}
          </Col>
          <Col xs={12} xl={4}>
            <form onSubmit={handleSubmit} className='review-form'>
              <h3>Post Your Reviews</h3>
              <div className='review-in'>
                <input
                  className='review-input'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  id='name'
                />
                <label className="review-label" for='name'>Name</label>
              </div>



              <div className="review-in">
                <input
                  className='review-input'
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  id='course'
                  placeholder=''
                />
                <label className="review-label-co" for='course'>Course</label>
              </div>

              <input
                type="file"
                placeholder="Enter your course"
                name="img"
                onChange={handleInputChange}


              />

              <div>
              <teaxtaera
                rows={3}
                placeholder=""
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                required
                className='ta'
              ></teaxtaera>
              </div>
     

              <Form.Group controlId="rating">
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
            </form>
          </Col>

        </Row>


      </Container>
    </div>
  );
};

export default StudentReview;
