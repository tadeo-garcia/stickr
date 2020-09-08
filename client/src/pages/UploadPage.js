import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PhotoUploadComponent from '../components/PhotoUploadComponent';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import './uploadpage.css';

function UploadPage() {

  const currentUserId = useSelector(state => state.auth.id);
  if (!currentUserId) return <Redirect to='/' />;

  return (
    <div>
      <ModalNavbar />
      <div className='top-container'>
        <div id='link-div'>
          <Link to='/dashboard' id='dashboard-link'> Back to photo feed.</Link>
        </div>
        <div className='upload-container' >
          <PhotoUploadComponent />
        </div>
      </div>
      <FooterBar />
    </div>
  )
};

export default UploadPage;