import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function ModalNavbar() {

  return (
    <div id='modal-navbar-div'>
      <span><NavLink id='home-link' to='/'>stickr</NavLink></span>
      <div class="nav-icons-div">
        <div id='cloud-icon' />
        <div id='avatar-icon' />
      </div>
    </div>
  )
};

export default ModalNavbar;