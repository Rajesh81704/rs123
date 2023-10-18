import React from 'react';
 import './Review.css'
const ReviewCard = () => {
  return (
    <div className="review-card">
      <img
        className="avatar"
        src="https://d3btuubl2bvm9d.cloudfront.net/images/2c9f8d695498b25a0154d2db55b40255/1502435808623-mid.jpg"
        alt="Reviewer"
      />
      <div className="reviewer-name">Vyankatesh Gadekar</div>
      <span className="review-category">KnotsbyAMP - Wedding</span>
      <div className="rating">
        <i className="fas fa-lg fa-star text-highlight"></i>5/5
      </div>
      <p className="review-text">
        Very professional team of photographers. Passionate about their work and very accommodating. Made our wedding memorable. Good with the parents and relatives as well.
      </p>
    </div>
  );
};

export default ReviewCard;
