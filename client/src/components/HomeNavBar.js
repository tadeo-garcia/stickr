import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function HomeNavbar() {

  return (
    <div id='modal-navbar-div'>
      <span><NavLink id='home-link' to='/'>stickr</NavLink></span>
      <span>
        <NavLink id="login-link" to="/login"> Log in</NavLink>
        <Link id='signup-link' to="/signup"> Sign Up</Link>
      </span>
    </div>
  )
};

export default HomeNavbar;