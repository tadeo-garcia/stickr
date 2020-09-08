import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosByUserId } from '../store/photos'
import { getUsers } from '../store/users'
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridUserComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPhotosByUserId(id))
    dispatch(getUsers())
  }, [dispatch])

  const userPhotoList = useSelector(state => state.photos.users)

  if (!userPhotoList) {
    return null
  }


  return (
    <div className="photo-grid-container">
      {Object.values(userPhotoList).map((photo, index) => {
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

export default PhotoGridUserComponent;