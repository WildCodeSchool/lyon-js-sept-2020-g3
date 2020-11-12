import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import './StarRating.css';
/* eslint-disable */
import { GoldenBook } from './Contact';
/* eslint-enable */

const StarRating = () => {
  const { rating, setRating, hover, setHover } = useContext(GoldenBook);
  return (
    <div className="starRating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <lable>
            {/* <input type="radio" name="rating" value={ratingValue} /> */}
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={50}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </lable>
        );
      })}
      <div className="rate">
        <p>{`The rating is ${rating}`}</p>
      </div>
    </div>
  );
};

export default StarRating;
