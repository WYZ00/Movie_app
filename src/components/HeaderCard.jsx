import React from 'react'
import { Link } from 'react-router-dom'

function HeaderCard({ movie }) {
  return (
    <div className='w-full h-screen relative'>
        <img
        className='w-full h-screen object-fit'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="ip-man"
        />
        <div className="dark-ov"></div>
        <div className='textbox'>
            <h1 className='text-5xl font-extrabold'>{movie.title}</h1>
            <p className='text-lg font-medium mb-3'>{movie.overview}</p>
            <Link
             to={movie.homepage}
             className='bg-slate-300 text-black px-3 py-3 rounded-md font-medium text-lg mt-1'
            >Watch Now
            </Link>
        </div>
    </div>
  )
}

export default HeaderCard