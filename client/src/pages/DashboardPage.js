import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import './dashboardpage.css';

function DashboardPage() {
  const currentUserId = useSelector(state => state.auth.id);

  if (!currentUserId) return <Redirect to='/' />;

  return (
    <>
      <ModalNavbar />
      <div className='feed-container' >
        <div id='motto-div'>
          <h1>Picture feed goes here</h1>
        </div>
        <FooterBar />
      </div >
    </>
  )
};

export default DashboardPage;