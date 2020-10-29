import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button className='question'>
        <Link to='/question'>Ask me a question</Link>
      </button>
      <button className='play'>
        <Link to='/play'>Challenge me</Link>
      </button>
    </div>
  );
};

export default Home;
