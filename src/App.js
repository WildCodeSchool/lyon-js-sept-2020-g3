import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Connexion from './components/Connexion';
import Contact from './components/Contact';
import Home from './components/Home';
import Akinator from './components/Akinator';
import Question from './components/Question';
import QuestionDrunk from './components/QuestionDrunk';
import Store from './components/Store';
import Settings from './components/Settings';
import ItemDetails from './components/ItemDetails';

import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route path="/store/:id" component={ItemDetails} />
          <Route path="/settings" component={Settings} />
          <Route path="/contact" component={Contact} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/question" component={Question} />
          <Route path="/questionDrunk" component={QuestionDrunk} />
          <Route path="/akinator" component={Akinator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
