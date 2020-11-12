import React from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';

const StarRated = ({ rate }) => {
  return (
    <div>
      {[...Array(rate)].map(() => {
        return (
          <fragment>
            <FaStar className="star" color="#ffc107" size={20} />
          </fragment>
        );
      })}
    </div>
  );
};

export default StarRated;
