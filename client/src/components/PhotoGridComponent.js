import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent() {
  let photoUrls = []
  const fetchPhotos = () => {
    for (let i = 20; i <= 43; i++) {
      const url = `/pics/users/1/sticker${i}.png`

      photoUrls.push(url)
    }
  }

  fetchPhotos();

  return (
    <div className="photo-grid-container">
      {photoUrls.map((url, index) => (
        <div className='photo-grid-item'>
          <div className='photo'>
            <SingleGridComponent url={url} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGridComponent;