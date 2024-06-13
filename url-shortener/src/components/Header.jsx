import React, { useState } from 'react';
import logo from '../logo.png';
import '../styles.css';
import { NavLink } from 'react-router-dom';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header>
      <div className="header-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={navActive ? 'active' : ''}>
        <ul>
            <li className="nav">
              <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/about" activeClassName="active-link">About</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/products" activeClassName="active-link">Products</NavLink>
            </li>
            <li className="nav">
              <NavLink to="/techstack" activeClassName="active-link">Tech Stack</NavLink>
            </li>

          </ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="hamburger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
