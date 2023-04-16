import React, { useEffect, useState } from 'react'
import Card from './Card'

function CardContainer({title,url}) {
  const [popularMovies,setPopularMovies] = useState([]);
  useEffect(()=>{
    getPopularMovies();
    // eslint-disable-next-line
  },[]);

  const getPopularMovies = async()=>{
    const res =await fetch(url)
    const data = await res.json();
    setPopularMovies(data.results);
    // console.log(data.results);
  }

  return (
    <section className='px-8 my-10'>
      <h1 className='text-4xl font-bold text-mono text-white'>{title}</h1>
      <div className='grid grid-cols-8 gap-3 mt-4'>
        {
          popularMovies.length && popularMovies.map(movie=>{
            return (
              <Card movie={movie} key={movie.id}/>
            )
          })
        }
      </div>
    </section>
    
  )
}

export default CardContainer
