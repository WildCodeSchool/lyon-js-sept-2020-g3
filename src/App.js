import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/store'>store</Link>
            </li>
            <li>
              <Link to='/settings'>settings</Link>
            </li>
            <li>
              <Link to='/contact'>contact</Link>
            </li>
            <li>
              <Link to='/connexion'>connexion</Link>
            </li>
          </ul>
        </nav>
        <button className='question'>
          <Link to='/question'>Ask me a question</Link>
        </button>
        <button className='play'>
          <Link to='/play'>Challenge me</Link>
        </button>
      </div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/store' component={Store} />
        <Route path='/settings' component={Settings} />
        <Route path='/contact' component={Contact} />
        <Route path='/connexion' component={Connexion} />
        <Route path='/question' component={Question} />
        <Route path='/play' component={Play} />
      </Switch>
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
