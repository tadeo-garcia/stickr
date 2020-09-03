import React from 'react';
import SingleGridComponent from './SingleGridComponent.js';
import './photofeed.css'

function PhotoGridComponent() {
  let photoUrls = []
  const fetchPhotos = () => {
    for (let i = 1; i <= 34; i++) {
      const url = `/pics/users/sticker${i}.png`

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