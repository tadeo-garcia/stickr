import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import SingleScrollComponent from './SingleScrollComponent';
import './photofeed.css'


const PhotoScrollComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
  }, [])

  const photoList = useSelector(state => state.photos)


  if (!photoList) {
    return null
  }

  return (
    <div className="photo-scroll">
      {Object.values(photoList).map((photo, index) => (
        <SingleScrollComponent url={photo.url} key={index} />
      ))}
    </div>
  );
}

export default PhotoScrollComponent;