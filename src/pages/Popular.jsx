import Header from "../components/Header"
import CardContainer from "../components/CardContainer"

function Popular() {
  return (
    <>
        <Header/>
        <CardContainer title={"Popular Now"} url={`https://api.themoviedb.org/3/movie/popular?api_key=cd6fa4c4b9aabf4891e810848a846145&language=en-US`}/>
    </>
  )
}

export default Popular