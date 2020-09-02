import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function ModalNavbar() {

  return (
    <div id='modal-navbar-div'>
      <span><NavLink id='home-link' to='/'>stickr</NavLink></span>
      <span>
        Avatar Goes here
      </span>
    </div>
  )
};

export default ModalNavbar;