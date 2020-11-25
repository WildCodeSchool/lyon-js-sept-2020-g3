import React, { useContext } from 'react';
/* eslint-disable */
import { GoldenBook } from './Contact';
/* eslint-enable */
import './Contact.scss';
import { SoundEffectContext } from './SoundEffectContext';

const Form = () => {
  const { addComment, setValue, value, rating, addRate } = useContext(
    GoldenBook
  );
  const { playButtonSound } = useContext(SoundEffectContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(value);
    addRate(rating);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="reviewInput"
        placeholder="Comment here..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="submitButton"
        type="submit"
        onSubmit={(e) => setValue(e.target.value)}
        onClick={playButtonSound}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
