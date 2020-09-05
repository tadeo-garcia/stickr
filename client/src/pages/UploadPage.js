import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useParams } from 'react-router-dom';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import './uploadpage.css';

function UploadPage() {
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  const currentUserId = useSelector(state => state.auth.id);
  if (!currentUserId) return <Redirect to='/' />;

  function handleUpload({ target: { files } }) {
    let data = new FormData();
    data.append('file', files[0])
  }


  return (
    <>
      <ModalNavbar />
      <div className='top-container'>
        <div id='link-div'>
          <Link to='/dashboard' id='dashboard-link'> Back to photo feed.</Link>
        </div>
        <div className='upload-container' >
          <div className='upload-div'>
            <input type='file' name='newPhoto' onChange={handleUpload} />
          </div>
        </div >
      </div>
      <FooterBar />
    </>
  )
};

export default UploadPage;