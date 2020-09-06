import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import PhotoScrollUserComponent from '../components/PhotoScrollUserComponent'
import PhotoGridUserComponent from '../components/PhotoGridUserComponent'
import DashboardSidebar from '../components/DashboardSidebar'
import { getPhotosByUserId } from '../store/photos'
import './userpage.css';



function UserPage() {
  const [displayFeed, setDisplayFeed] = useState(<PhotoGridUserComponent />)
  const currentUserId = useSelector(state => state.auth.id);

  if (!currentUserId) return <Redirect to='/' />;

  const changeDisplayScroll = () => {
    setDisplayFeed(<PhotoScrollUserComponent />)
  }

  const changeDisplayGrid = () => {
    setDisplayFeed(<PhotoGridUserComponent />)
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