import React from 'react';
import './photofeed.css'



const SingleGridComponent = ({ url, key }) => {
  return (
    <img src={url} alt='sticker' className='grid-sticker' id='single-stick' />
  );
}

export default SingleGridComponent;