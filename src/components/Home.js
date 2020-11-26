import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { SoundEffectContext } from './SoundEffectContext';
import Background from './Background';

const Home = () => {
  const { playButtonSound } = useContext(SoundEffectContext);

  return (
    <div className="homeBody">
      <Background />
      <div className="homeBubble">
        <span className="tip">Hi, I'm Archibot, your new best friend !</span>
      </div>
      <div className="imageContainer" />
      <div className="homebuttons">
        <button type="button" className="question" onClick={playButtonSound}>
          <Link to="/question">Question me</Link>
        </button>
        <button type="button" className="play" onClick={playButtonSound}>
          <Link to="/akinator">Challenge me</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
