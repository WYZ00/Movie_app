import React from 'react'
import {PlayCircleIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

function Card({movie}) {
    // console.log(movie);
  return (
    <Link
     className='rounded-lg overflow-hidden relative'
     to={`/details/${movie.id}`}
     >
        <img
          className='w-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}/>
        <div className="dark-ov"></div>
        <PlayCircleIcon className='text-white w-14 h-14 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
         
    </Link>
  )
}

export default Card