import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {



  return (
    <div className='md:px-2 overflow-y-auto mt-16'>
            <h1 className='text-3xl text-white py-6 font-semibold'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar overflow-y-hidden'>
            <div className='flex gap-3 '>
              {movies?.map((movie)=><MovieCard key={movie.id} poster_path={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
} 

export default MovieList
