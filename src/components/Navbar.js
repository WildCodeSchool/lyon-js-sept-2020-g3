import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './Navbar.scss';
import logo from '../Images/Logo.png';
import purpleLogo from '../Images/purpleLogo.png';
import cross from '../Images/cross.png';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <div className="navbar">
        <h1 className="navbarLogo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>
        <div className="menu">
          <ul>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/question">
              Question Me
            </NavLink>
            <NavLink exact to="/akinator">
              Challenge Me
            </NavLink>
            <NavLink exact to="/store">
              Store
            </NavLink>
            <NavLink exact to="/settings">
              Settings
            </NavLink>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
            <NavLink exact to="/connexion">
              Connexion
            </NavLink>
          </ul>
        </div>
        <Menu
          className="menuNavbar"
          isOpen={menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          noOverlay
          right
          width="100%"
          customCrossIcon={<img src={cross} alt="cross icon" />}
          disableAutoFocus
        >
          <Link to="/" onClick={this.closeMenu}>
            <img className="purpleLogo" src={purpleLogo} alt="logo burger" />
          </Link>
          <Link to="/" onClick={this.closeMenu}>
            Home
          </Link>
          <Link to="/question" onClick={this.closeMenu}>
            Ask Me Something
          </Link>
          <Link to="/akinator" onClick={this.closeMenu}>
            Challenge Me
          </Link>
          <Link to="/store" onClick={this.closeMenu}>
            Store
          </Link>
          <Link to="/settings" onClick={this.closeMenu}>
            Settings
          </Link>
          <Link to="/contact" onClick={this.closeMenu}>
            Contact
          </Link>
          <Link to="/connexion" onClick={this.closeMenu}>
            Connexion
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
