import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)

  return (
    movies.nowPlayingMovies &&(
      <div className='bg-black'>
       <div className="-mt-64 relative z-40">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies?.topRatedOnly}/>
        <MovieList title={"Up-coming"} movies={movies?.upcomming}/>
       </div>
    </div>
    )
  )
}

export default SecondaryContainer;
