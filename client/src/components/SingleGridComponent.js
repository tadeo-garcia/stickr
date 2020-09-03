import React from 'react';
import './photofeed.css'



const SingleGridComponent = ({ url, key }) => {

  const num1 = Math.ceil(Math.random() * 4)
  // const columnProp = 'grid-column'
  const column = `w-${num1}`
  const num2 = Math.ceil(Math.random() * 4)
  // const rowProp = 'grid-row'
  const row = `h-${num2}`

  const style = {
    columnProp: column,
    rowProp: row
  }

  return (

    <img src={url} alt='sticker' style={style} key={key} className='grid-sticker' id='single-stick' />

  );
}

export default SingleGridComponent;