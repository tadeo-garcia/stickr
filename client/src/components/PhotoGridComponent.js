import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent() {
  const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);
  // const [photos, setPhotos] = useState([])


  useEffect(() => {
    dispatch(getPhotos())
  }, [])



  const photoList = useSelector(state => state.photos)


  let photoArray = Object.values(photoList);
  photoArray.forEach(photo => console.log(photo.url))

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