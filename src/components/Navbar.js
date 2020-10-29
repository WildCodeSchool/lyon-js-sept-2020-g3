import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Connexion from './Connexion';
import Contact from './Contact';
import Home from './Home';
import Play from './Play';
import Question from './Question';
import Store from './Store';
import Settings from './Settings';
import './Navbar.scss';
import { slide as Menu } from 'react-burger-menu';

// function Navbar() {
//   return (
//     <Router>
//       <div className='navbar'>
//         <h1 className='navbarLogo'>
//           <img src={require('../Images/Logo.png')} alt='logo'></img>
//         </h1>
//         <div className='burgerMenu'>
//           <div class='bar1'></div>
//           <div class='bar2'></div>
//           <div class='bar3'></div>
//         </div>
//         <nav className='navbarLink'>
//           <ul>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/store'>Store</Link>
//             </li>
//             <li>
//               <Link to='/settings'>Settings</Link>
//             </li>
//             <li>
//               <Link to='/contact'>Contact</Link>
//             </li>
//             <li>
//               <Link to='/connexion'>Connexion</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route path='/store' component={Store} />
//         <Route path='/settings' component={Settings} />
//         <Route path='/contact' component={Contact} />
//         <Route path='/connexion' component={Connexion} />
//         <Route path='/question' component={Question} />
//         <Route path='/play' component={Play} />
//       </Switch>
//     </Router>
//   );
// }

class Navbar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Router>
        <div className='navbar'>
          <h1 className='navbarLogo'>
            <img src={require('../Images/Logo.png')} alt='logo'></img>
          </h1>
          <Menu right width={'40%'}>
            <Link to='/'>Home</Link>
            <Link to='/store'>Store</Link>
            <Link to='/settings'>Settings</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/connexion'>Connexion</Link>
          </Menu>
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
}

export default Navbar;
