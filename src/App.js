import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>

      <div className='app'>
        <Navbar />
      </div>

    </Router>
  );
}

// Dans le composant Question

/* import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Question() {
  return (
    <Router>
      <button>
        <Link to='/choosemode'>Modes</Link>
      </button>

      <Switch>
        <Route path='/choosemode' component={Modes} />
      </Switch>
    </Router>
  );
}

export default Question; */

// Dans le composant store

/* import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const allModes = [
  { id: 0, name: 'Yoda', image: "lien de l'image", active: true, descriptif "blablabla" },
  { id: 1, name: 'DrunkBot', image: "lien de l'image", active: false, descriptif "blablabla" },
];

function Store(props) {
  return (
    <Router>
      <div>
        <img src="maitre yoda"><Link to='/choosemode/0'>Home</Link></img>
        <img src="drunkbot"><Link to='/choosemode/1'>Home</Link></img>  
      </div>

      <Switch>
        <Route exact path='/:id' component={StoreDetails} />
      </Switch>
    </Router>
  );
} */

/* demander à Pierre comment faire passer les props d'un composant à l'autre */

/* export default Store;
 */

export default App;
