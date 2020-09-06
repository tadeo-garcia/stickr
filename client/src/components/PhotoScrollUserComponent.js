import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  }, [])

  const userPhotoList = useSelector(state => state.photos.users)
  const usersList = useSelector(state => state.users)

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


