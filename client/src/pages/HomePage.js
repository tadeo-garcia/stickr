import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './homepage.css';

import HomeNavbar from '../components/HomeNavBar';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';

function HomePage() {
  const currentUserId = useSelector(state => state.auth.id);

  if (currentUserId) return <Redirect to='/dashboard' />;

  let Navbar;

  if (currentUserId) {
    Navbar = <ModalNavbar />
  } else {
    Navbar = <HomeNavbar />
  }

  return (
    <>
      <div>{Navbar}</div>
      <div className='main-container' >
        <div id='motto-div'>
          <h1 id='inspo'>Find your inspiration.</h1>
          <h2>Join the Stickr community, every artist around the world is welcome here. </h2>
          <Link to='/signup' id='login-button'>Start for free</Link>
        </div>

        <FooterBar />
      </div >
    </>
  )
};

export default HomePage;