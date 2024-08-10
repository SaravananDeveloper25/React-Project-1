import React, { useState } from "react";
import "./home.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import rimg1 from '../../images/man logo.png'
import rimg2 from '../../images/women logo.png'
const Coverflow = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const reviews = [
    { id: 1, img: rimg1, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis saepe dolore ab exercitationem error sint incidunt delectus. Voluptate ducimus sequi reiciendis cum quos quisquam dignissimos, doloribus voluptatum repellat facere illo?",author:'xyz' },
    { id: 2, img: rimg2, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis saepe dolore ab exercitationem error sint incidunt delectus. Voluptate ducimus sequi reiciendis cum quos quisquam dignissimos, doloribus voluptatum repellat facere illo?",author:'xyz' },
    { id: 3, img: rimg1, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis saepe dolore ab exercitationem error sint incidunt delectus. Voluptate ducimus sequi reiciendis cum quos quisquam dignissimos, doloribus voluptatum repellat facere illo?",author:'xyz' },
    { id: 4, img: rimg2, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis saepe dolore ab exercitationem error sint incidunt delectus. Voluptate ducimus sequi reiciendis cum quos quisquam dignissimos, doloribus voluptatum repellat facere illo?",author:'xyz' },
    { id: 5, img: rimg1, review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis saepe dolore ab exercitationem error sint incidunt delectus. Voluptate ducimus sequi reiciendis cum quos quisquam dignissimos, doloribus voluptatum repellat facere illo?",author:'xyz' },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div className="coverflow-container">
            <button className="nav-button prev" onClick={handlePrev}>
      <KeyboardArrowLeftIcon ></KeyboardArrowLeftIcon >
        
      </button>
      <div className="coverflow">
        {reviews.map((review, index) => {
          const offset = index - activeIndex;
          const isActive = offset === 0;

          return (
            <div
              key={review.id}
              className={`coverflow-item ${isActive ? "active" : ""}`}
              style={{
                transform: `translateX(${offset * 100}%) ${isActive?'translateY(-30%)':'translateY(0px)'} scale(${1 - Math.abs(offset) * 0.2})`,
                zIndex: reviews.length - Math.abs(offset),
                opacity: isActive ? 1 : 0.5,
                width:`${isActive?'610px':'457px'}`,
                height:`${isActive?'252px':'189px'}`
              }}
            >
              <div className="review-box">
                <img src={review.img} alt="" />
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p>{review.review} </p>
                <h4 style={{textAlign:'end'}}>-{review.author}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <button className="nav-button next" onClick={handleNext}>
      <ChevronRightIcon></ChevronRightIcon>
      </button>
    </div>
  );
};

export default Coverflow;
