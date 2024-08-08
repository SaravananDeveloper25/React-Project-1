import React, { useState } from "react";
import "./home.css";

const Coverflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    { id: 1, content: "1", author: "" },
    { id: 2, content: "2", author: "" },
    { id: 3, content: "3", author: "" },
    { id: 4, content: "4", author: "" },
    { id: 5, content: "5", author: "" },
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
        ◀
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
                transform: `translateX(${offset * 60}%) scale(${1 - Math.abs(offset) * 0.2})`,
                zIndex: reviews.length - Math.abs(offset),
                opacity: isActive ? 1 : 0.5,
              }}
            >
              <div className="review-box">
                <p>{review.content}</p>
                <h4>{review.author}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <button className="nav-button next" onClick={handleNext}>
        ▶
      </button>
    </div>
  );
};

export default Coverflow;
