import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {



  return (
    <div className='px-2 '>
            <h1 className='text-3xl text-white py-6 font-semibold'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar'>
            <div className='flex gap-3 '>
              {movies?.map((movie)=><MovieCard key={movie.id} poster_path={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
} 

export default MovieList
