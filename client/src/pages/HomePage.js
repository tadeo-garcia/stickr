import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './homepage.css';

import HomeNavbar from '../components/HomeNavBar';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';

{/* <Link to="/signup" id='demo'> Sign up here.</Link> */ }

function HomePage() {
  const currentUserId = useSelector(state => state.auth.id);

  let Navbar;

  if (currentUserId) {
    Navbar = <ModalNavbar />
  } else {
    Navbar = <HomeNavbar />
  }


  return (
    <>
      <div>{Navbar}</div>
      <div class='main-container' >
        <div id='motto-div'>
          <h1>Find your inspiration.</h1>
          <h2>Join the Stickr community, every artist around the world is welcome here. </h2>
          <Link to='/signup' id='login-button'>Start for free</Link>
        </div>

        <FooterBar />
      </div >
    </>
  )
};

export default HomePage;