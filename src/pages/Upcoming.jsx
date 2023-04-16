import React from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'

function Upcoming() {
  return (
    <>
    <Header/>
    <CardContainer title={"Upcoming Movies"} url={`https://api.themoviedb.org/3/movie/upcoming?api_key=cd6fa4c4b9aabf4891e810848a846145&language=en-US`}/>
    </>
  )
}

export default Upcoming