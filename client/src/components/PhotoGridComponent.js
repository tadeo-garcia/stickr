import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import { getUsers } from '../store/users'
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent({showNotif}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
    dispatch(getUsers())
  }, [dispatch])

  const photoList = useSelector(state => state.photos.list)

  if (!photoList) {
    return null
  }

  return (
    <div className="photo-grid-container">
      {Object.values(photoList).map((photo, index) => {
        let link = `/user/${photo.userId}/photo/${photo.id}`
        return (
          <a href={link} key={index}>
            <div className='photo-grid-item' >
              <div className='photo'>
                <SingleGridComponent url={photo.url} />
              </div>
            </div>
          </a>
        )
      }
      )}
    </div >
  );
}

export default PhotoGridComponent;