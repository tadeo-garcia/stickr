import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import PhotoScrollComponent from '../components/PhotoScrollComponent'
import PhotoGridComponent from '../components/PhotoGridComponent'
import DashboardSidebar from '../components/DashboardSidebar'
import './userpage.css';



function UserPage() {
  const [displayFeed, setDisplayFeed] = useState(<PhotoGridComponent />)
  const currentUserId = useSelector(state => state.auth.id);
  if (!currentUserId) return <Redirect to='/' />;

  const changeDisplayScroll = () => {
    setDisplayFeed(<PhotoScrollComponent />)
  }

  const changeDisplayGrid = () => {
    setDisplayFeed(<PhotoGridComponent />)
  }


  return (
    <>
      <ModalNavbar />
      <div className='body-container'>
        <div className='feed-container' >
          {displayFeed}
        </div >
        <DashboardSidebar
          changeDisplayScroll={changeDisplayScroll}
          changeDisplayGrid={changeDisplayGrid}
        />
      </div>
      <FooterBar />
    </>
  )
};

export default UserPage;