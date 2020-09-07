import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosByUserId } from '../store/photos'
import { getUsers } from '../store/users'
import SingleScrollComponent from './SingleScrollComponent';
import './photofeed.css'

const PhotoScrollUserComponent = () => {
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
    <>
      <div className="photo-scroll">
        {Object.values(userPhotoList).map((photo, index) => {
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

export default PhotoScrollUserComponent;


