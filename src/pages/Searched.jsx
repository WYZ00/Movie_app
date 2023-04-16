import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

function Searched() {
    const {title} = useParams();
    const [searchedMovies,setSearchMovies] = useState([]);

    useEffect(()=>{
        getSearchMovie();
        // eslint-disable-next-line
    },[title])
    const getSearchMovie = async()=>{
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=cd6fa4c4b9aabf4891e810848a846145&language=en-US&query=${title}&page=1&include_adult=false`
            );
            const data = await res.json();
            setSearchMovies(data.results);
            // console.log(data);
    }
  return (
    <section className='px-8 my-10'>
      <h1 className='text-4xl font-bold text-mono text-white'>Search results for "{title}"</h1>
      <div className='grid grid-cols-8 gap-3 mt-4'>
        {
            searchedMovies.length && searchedMovies.map(movie=>{
                return (
                    <Card key={movie.id} movie={movie}/>
                )
            })
            
        }
      </div>
    </section>
  )
}

export default Searched