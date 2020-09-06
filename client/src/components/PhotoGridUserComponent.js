import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  }, [])

  const userPhotoList = useSelector(state => state.photos.users)
  const usersList = useSelector(state => state.users)

  if (!userPhotoList) {
    return null
  }

  // console.log(photoList)

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