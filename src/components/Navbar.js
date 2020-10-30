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

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }
  // showSettings(event) {
  //   event.preventDefault();
  // }
  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  };
  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <Router>
        <div className='navbar'>
          <h1 className='navbarLogo'>
            <img src={require('../Images/Logo.png')} alt='logo'></img>
          </h1>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
            noOverlay
            right
            width={'100%'}
          >
            <Link to='/' onClick={this.closeMenu}>
              Home
            </Link>
            <Link to='/store' onClick={this.closeMenu}>
              Store
            </Link>
            <Link to='/settings' onClick={this.closeMenu}>
              Settings
            </Link>
            <Link to='/contact' onClick={this.closeMenu}>
              Contact
            </Link>
            <Link to='/connexion' onClick={this.closeMenu}>
              Connexion
            </Link>
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
