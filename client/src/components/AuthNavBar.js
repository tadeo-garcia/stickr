import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function AuthNavbar() {

  return (
    <div id='basic-navbar-div'>
      <span><Link id='home-link' to='/'>stickr</Link></span>
    </div>
  )
};

export default AuthNavbar;