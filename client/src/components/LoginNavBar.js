import React from 'react';
import { Link } from 'react-router-dom';
import './loginnavbar.css';

function LoginNavbar() {

  return (
    <div class='navbar-div'>
      <span><Link id='home-link' to='/'>stickr</Link></span>
    </div>
  )
};

export default LoginNavbar;