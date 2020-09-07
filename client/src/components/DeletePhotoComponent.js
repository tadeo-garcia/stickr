import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePhotoById } from '../store/photos';
import './deletephoto.css';

function DeletePhotoButton({ currentUserId, photoId }) {
  const dispatch = useDispatch();
  const history = useHistory();


  const handleDeletePhoto = e => {
    e.preventDefault();
    dispatch(deletePhotoById(photoId))
    history.push(`/user/dashboard`)
  }


  return (
    <div>
      <span id='delete-button' onClick={handleDeletePhoto}> Delete this picture.</span>
    </div>
  )
}

export default DeletePhotoButton;