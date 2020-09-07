import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { deletePhotoById } from '../store/photos';
import './deletephoto.css';

function DeletePhotoButton({ currentUserId, photoId }) {
  const dispatch = useDispatch();
  const history = useHistory();


  const handleDeletePhoto = e => {
    e.preventDefault();
    console.log('inside handle delete')
    dispatch(deletePhotoById(photoId))
    history.push(`/user/${currentUserId}`)
  }


  return (
    <div>
      <span id='delete-button' onClick={handleDeletePhoto}> Delete this picture.</span>
    </div>
  )
}

export default DeletePhotoButton;