import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './dashboardpage.css';

import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';

function DashboardPage() {
  const currentUserId = useSelector(state => state.auth.id);




  return (
    <>
      <ModalNavbar />
      <div class='feed-container' >
        <div id='motto-div'>
          <h1>Picture feed goes here</h1>
        </div>
        <FooterBar />
      </div >
    </>
  )
};

export default DashboardPage;