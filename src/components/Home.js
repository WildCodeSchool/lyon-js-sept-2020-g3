import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button type="button" className="question">
        <Link to="/question">Ask me a question</Link>
      </button>
      <button type="button" className="play">
        <Link to="/akinator">Challenge me</Link>
      </button>
    </div>
  );
};

export default Home;
