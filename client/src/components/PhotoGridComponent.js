import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PhotoComponent from './PhotoComponent';
import './photogrid.css'


function PhotoGridComponent() {
  // const [photoUrls, setPhotoUrls] = useState({});
  const [loaded, setLoaded] = useState(false);

  let photoUrls = []
  const fetchPhotos = () => {
    for (let i = 20; i <= 38; i++) {
      const url = `/pics/users/1/sticker${i}.png`

      photoUrls.push(url)
    }
    // setLoaded(true)
  }


  // useEffect(() => {
  //   fetchPhotos();
  // }, [])

  fetchPhotos();

  // const url = '/pics/users/1/sticker23.png'

  console.log(photoUrls)


  return (
    <div className="photo-grid">
      {photoUrls.map((url, index) => (
        <PhotoComponent url={url} index={index} />
      ))}
    </div>
  );
}

export default PhotoGridComponent;