import React from 'react';
import './photofeed.css'



const SingleScrollComponent = ({ url, key }) => {
  return (

    <img src={url} alt='sticker' key={key} class='scroll-sticker' />

  );
}

export default SingleScrollComponent;