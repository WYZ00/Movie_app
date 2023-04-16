import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {PlayIcon} from '@heroicons/react/24/solid'

function Details() {
    const [movie,setMovie] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        getMovie();
        // eslint-disable-next-line
    },[id])
    const getMovie = async()=>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cd6fa4c4b9aabf4891e810848a846145&language=en-US`)
        const data = await res.json();
        setMovie(data);
        // console.log(data.genres);
    }
    return (
        <section>
            {
                movie && (
                    <section className='w-full h-screen relative'>
                        <div className='h-2/3 relative'>
                            <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                            alt={movie.title}
                            className='w-full h-full object-cover' 
                            />
                            <div className="dark-ov"></div>
                        </div>
                        <div className='detail-container'>
                            <img 
                                className='w-52 rounded-md'
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                                alt={movie.title} />
                            <div className='ms-4 text-white'>
                                <h1 className='text-4xl'>{movie.original_title}</h1>
                                <p className='text-red-500 font-medium mb-4'>Release On :<span className='text-white'>{movie.release_date}</span></p>
                                <p className='text-red-500 font-medium mb-4'>Runtime :<span className='text-white'>{movie.runtime}</span> min</p>
                                {movie.genres &&
                                    movie.genres.map(genre=>{
                                        return (
                                            <span
                                            key={genre.id} 
                                            className='bg-red-500 px-2 py-2 rounded-xl font-bold me-1.5 my-1.5'
                                            >
                                            {genre.name}
                                            </span>
                                            
                                        )
                                    })
                                }
                                <h2 className='text-xl font-bold my-4'>{movie.overview}</h2>
                                <Link 
                                to={movie.homepage} 
                                className='font-bold textlg px-3 py-2 rounded-lg border-2 border-red-500'
                                >
                                    <PlayIcon className='w-6 h-6 text-red-500 inline-block me-2'/>
                                    Watch Now
                                </Link>
                            </div>
                        </div>
                            
                        
                    </section>
                )
            }
        </section>
    )
}

export default Details