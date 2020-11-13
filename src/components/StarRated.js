import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRated = ({ rate }) => {
  return (
    <div>
      {[...Array(rate)].map(() => {
        return (
          <>
            <FaStar className="star" color="#ffc107" size={20} />
          </>
        );
      })}
    </div>
  );
};

export default StarRated;
