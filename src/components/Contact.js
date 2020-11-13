import React, { useState, useRef, useEffect } from 'react';
import './Contact.scss';
/* eslint-disable */
import Form from './Form';
import StarRating from './StarRating';
/* eslint-enable */
import StarRated from './StarRated';

export const GoldenBook = React.createContext();

const Contact = () => {
  const [commentArray, setCommentArray] = useState([]);
  const [rate, setRate] = useState([]);
  const [value, setValue] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const bottom = useRef(null);

  const addComment = () => {
    const newComment = [...commentArray, rating, value];
    setCommentArray(newComment);
  };

  const addRate = (note) => {
    const newRate = [...rate, note];
    setRate(newRate);
  };

  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [commentArray]);

  return (
    <div className="contactBody">
      <div className="title">
        <h3>Rate & Write me a comment to make me improve my friend !</h3>
      </div>
      <div className="screen">
        <div className="goldenBook">
          {commentArray.map((element, index) => {
            return (
              <div
                /* eslint-disable */
                key={index}
                /* eslint-enable */
                className="review"
              >
                {index % 2 === 0 ? (
                  <div className="stars">
                    <StarRated rate={element} />
                  </div>
                ) : (
                  <div className="comment">{`${element}`}</div>
                )}
              </div>
            );
          })}
          <div ref={bottom} />
        </div>
      </div>
      <div className="reviewArea">
        <GoldenBook.Provider
          value={{
            commentArray,
            rate,
            value,
            rating,
            hover,
            addComment,
            addRate,
            setValue,
            setHover,
            setRating,
          }}
        >
          <StarRating />
          <Form />
        </GoldenBook.Provider>
      </div>
    </div>
  );
};

export default Contact;
