import React from 'react';
import './photogrid.css'



function PhotoComponent({ url, key }) {
  return (

    <img src={url} alt='sticker' key={key} class='sticker' />

  );
}

export default PhotoComponent;


// <div id='sticker-div' key={key} >
//   <img src={url} alt='sticker' key={key} class='sticker' />
// </div >