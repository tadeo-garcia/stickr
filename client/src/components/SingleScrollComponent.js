import React from 'react';
import './photofeed.css'



const SingleScrollComponent = ({ url }) => {
  return (

    <img src={url} alt='sticker' className='scroll-sticker' />

  );
}

export default SingleScrollComponent;