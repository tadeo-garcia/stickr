import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useParams } from 'react-router-dom';
import { getPhoto } from '../store/photos';
import { getUser } from '../store/users';
import ModalNavbar from '../components/ModalNavBar';
import FooterBar from '../components/FooterBar';
import SingleScrollComponent from '../components/SingleScrollComponent'
// import DashboardSidebar from '../components/DashboardSidebar'
import './singlephotopage.css';

function SinglePhotoPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { user } = useParams();



  useEffect(() => {
    dispatch(getPhoto(id))
  }, []);

  const photo = useSelector(state => state.photos.single)
  const state = useSelector(state => state)


  const currentUserId = useSelector(state => state.auth.id);
  if (!currentUserId) return <Redirect to='/' />;



  if (!photo) {
    return null;
  }
  console.log(photo.User);
  return (
    <>
      <ModalNavbar />
      <div className='top-container'>
        <div id='link-div'>
          <Link to='/dashboard' id='dashboard-link'> Back to photo feed.</Link>
        </div>
        <div className='photo-container' >
          <div className='photo-div'>
            <SingleScrollComponent url={photo.url} ></SingleScrollComponent>
          </div>
          <div className='content-div'>
            <h4>{photo.description}</h4>
            <h4>created by : {photo.User.username}</h4>
          </div>
        </div >
      </div>
      <FooterBar />
    </>
  )
};

export default SinglePhotoPage;