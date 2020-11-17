import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="homeBody">
      <div className="homeBubble">
        <span className="tip">Hi, I'm Archibot, your new best friend !</span>
      </div>
      <div className="imageContainer" />
      <div className="homebuttons">
        <button type="button" className="question">
          <Link to="/question">Ask me</Link>
        </button>
        <button type="button" className="play">
          <Link to="/akinator">Challenge me</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
