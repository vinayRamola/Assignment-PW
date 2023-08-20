import React from 'react'
import './bird.css'
import { Link } from 'react-router-dom'

const Bird = ({id, image}) => {
  return (
    <div className='bird'>
        <Link to={`/bird/${id}`}>
          <div className='bird-image'><img src={image} /></div>
        </Link>
    </div>
  )
}

export default Bird