import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleScrollComponent from './SingleScrollComponent';
import './photofeed.css'


const PhotoScrollComponent = () => {
  const [loaded, setLoaded] = useState(false);

  let photoUrls = []
  const fetchPhotos = () => {
    for (let i = 1; i <= 34; i++) {
      const url = `/pics/users/sticker${i}.png`

      photoUrls.push(url)
    }
  }

  fetchPhotos();

  return (
    <div className="photo-scroll">
      {photoUrls.map((url, index) => (
        <SingleScrollComponent url={url} index={index} />
      ))}
    </div>
  );
}

export default PhotoScrollComponent;