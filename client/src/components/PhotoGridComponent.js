import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos } from '../store/photos'
import { getUsers } from '../store/users'
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos())
    dispatch(getUsers())
  }, [])

  const photoList = useSelector(state => state.photos.list)
  const usersList = useSelector(state => state.users)
  const state = useSelector(state => state)

  if (!photoList) {
    return null
  }

  // console.log(photoList)

  return (
    <div className="photo-grid-container">
      {Object.values(photoList).map((photo, index) => {
        let link = `/user/${photo.userId}/photo/${photo.id}`
        return (
          <Link to={link} key={index}>
            <div className='photo-grid-item' >
              <div className='photo'>
                <SingleGridComponent url={photo.url} />
              </div>
            </div>
          </Link>
        )
      }
      )}
    </div >
  );
}

export default PhotoGridComponent;