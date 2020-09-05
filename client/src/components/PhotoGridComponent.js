import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import { getUsers } from '../store/auth'
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
    // dispatch(getUsers())
  }, [])

  const photoList = useSelector(state => state.photos.list)
  const usersList = useSelector(state => state.users)


  if (!photoList) {
    return null
  }

  return (

    <div className="photo-grid-container">
      {Object.values(photoList).map((photo, index) => (
        <div className='photo-grid-item' key={index}>
          <div className='photo'>
            <SingleGridComponent url={photo.url} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGridComponent;