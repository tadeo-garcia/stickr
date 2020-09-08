import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import SingleScrollComponent from './SingleScrollComponent';
import './photofeed.css'


const PhotoScrollComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  const photoList = useSelector(state => state.photos.list)


  if (!photoList) {
    return null
  }

  return (
    <>
      <div className="photo-scroll">
        {Object.values(photoList).map((photo, index) => {
          let link = `/user/${photo.userId}/photo/${photo.id}`
          return (
            < a href={link} key={index}>
              <SingleScrollComponent url={photo.url} />
            </a>
          )
        }

        )}
      </div>
    </>
  );
}

export default PhotoScrollComponent;


