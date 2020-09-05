import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
  }, [])

  const photoList = useSelector(state => state.photos)


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