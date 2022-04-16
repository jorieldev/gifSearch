import React from 'react'

const GifGridItem = ({id,url,title}) => {
  return (
    <div className='card animate__animated animate__backInDown'>
        <img
        key={id}
        src={url}
        alt={title}   
        />
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem