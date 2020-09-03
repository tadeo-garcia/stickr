import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import SingleScrollComponent from '../components/SingleScrollComponent'
// import DashboardSidebar from '../components/DashboardSidebar'
import './singlephotopage.css';

function SinglePhotoPage() {

  const currentUserId = useSelector(state => state.auth.id);
  if (!currentUserId) return <Redirect to='/' />;



  return (
    <>
      <ModalNavbar />
      <div className='top-container'>
        <div id='link-div'>
          <Link to='/dashboard' id='dashboard-link'> Back to photo feed.</Link>
        </div>
        <div className='photo-container' >
          <div className='photo-div'>
            <SingleScrollComponent url={'/pics/users/sticker21.png'} key={20}></SingleScrollComponent>
          </div>
          <div className='content-div'>
            <h4>Description etc goes here.</h4>
          </div>
        </div >
      </div>
      <FooterBar />
    </>
  )
};

export default SinglePhotoPage;