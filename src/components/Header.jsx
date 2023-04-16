import React, { useEffect, useState } from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';

function Header() {
    const [relatedMovies,setReleatedMovies] = useState([]); 
    useEffect(()=>{
        getRelatedMovies();
    },[])

    const getRelatedMovies = async() => {
        const res = await fetch('https://api.themoviedb.org/3/movie//top_rated?api_key=cd6fa4c4b9aabf4891e810848a846145&language=en-US');
        const data = await res.json();
        setReleatedMovies(data.results);
        // console.log(data.results);
    }

  return (
    <section className='w-full h-screen'>
        <Splide options={{
            type:'loop',
            arrows : false,
            autoplay : true,
            interval : 5000,
        }}>
            {
                relatedMovies.length && relatedMovies.map(movie=>{
                    return(
                    <SplideSlide key={movie.id}>
                        <HeaderCard movie={movie}/>
                    </SplideSlide>
                    );
                })
            }
        </Splide>

    </section>
  )
}

export default Header